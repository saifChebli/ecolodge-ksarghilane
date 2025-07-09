import prisma from "../db/prisma.js";
import Joi from "joi";
import { sendEmail } from "../utils/sendMail.js";
import { generateReservationEmail } from "../utils/reservationTemplate.js";
import { generateReservationCode } from "../utils/generateReservationCode.js";
import dayjs from 'dayjs';

const reservationSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(4).required(),
  roomType: Joi.string().valid("STANDARD", "SUITE").required(),
  adults: Joi.number().integer().min(0).required(),
  children: Joi.number().integer().min(0).required(),
  checkInDate: Joi.date().required(),
  checkOutDate: Joi.date().required(),
  status: Joi.string()
    .valid("PENDING", "ACCEPTED", "DECLINED", "CHECKED_IN")
    .optional(),
});

export const createReservation = async (req, res) => {
  try {
    const { error, value } = reservationSchema.validate(req.body.data);

    if (error) return res.status(400).json({ error: error.details[0].message });

    const reservationCode = await generateReservationCode();

    const reservation = await prisma.reservation.create({
      data: { ...value, reservationCode },
    });

    // send email to admin
    await sendEmail({
      to: "cheblii.saifeddine@gmail.com",
      subject: "📩 New Reservation Request",
      html: generateReservationEmail(req.body.data),
    });

    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ error: "Failed to create reservation" });
    console.log(err);
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reservations" });
  }
};

export const getReservationById = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: Number(id) },
    });
    if (!reservation)
      return res.status(404).json({ error: "Reservation not found" });
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reservation" });
  }
};

export const updateReservationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const statusSchema = Joi.string()
    .valid("PENDING", "ACCEPTED", "DECLINED", "CHECKED_IN")
    .required();
  const { error } = statusSchema.validate(status);

  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const updated = await prisma.reservation.update({
      where: { id },
      data: { status },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update reservation status" });
  }
};

export const updateReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const { error, value } = reservationSchema.validate(req.body, {
      allowUnknown: true,
      presence: "optional",
    });
    if (error) return res.status(400).json({ error: error.details[0].message });

    const updated = await prisma.reservation.update({
      where: { id: Number(id) },
      data: value,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update reservation" });
  }
};

export const deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reservation.delete({ where: { id: Number(id) } });
    res.json({ message: "Reservation deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete reservation" });
  }
};

// Stats endpoints for checked in and pending reservations

export const getReservationStats = async (req, res) => {
  try {
    const [total, pending, accepted, declined, checkedIn, thisMonth, totalGuests] = await Promise.all([
      prisma.reservation.count(),
      prisma.reservation.count({ where: { status: 'PENDING' } }),
      prisma.reservation.count({ where: { status: 'ACCEPTED' } }),
      prisma.reservation.count({ where: { status: 'DECLINED' } }),
      prisma.reservation.count({ where: { status: 'CHECKED_IN' } }),
      prisma.reservation.count({
        where: {
          createdAt: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          },
        },
      }),
      prisma.reservation.aggregate({
        _sum: {
          adults: true,
          children: true,
        },
      }),
    ]);

    res.status(200).json({
      total,
      pending,
      accepted,
      declined,
      checkedIn,
      thisMonth,
      totalGuests: (totalGuests._sum.adults || 0) + (totalGuests._sum.children || 0),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch reservation statistics' });
  }
};


export const getDailyBookingStats = async (req, res) => {
  try {
    const stats = await prisma.$queryRaw`
      SELECT 
        DATE("createdAt") AS date, 
        COUNT(*) AS count
      FROM "Reservation"
      GROUP BY date
      ORDER BY date;
    `;

    // Convert BigInt count to number
    const cleanedStats = stats.map(item => ({
      date: item.date,
      count: Number(item.count), // 👈 this avoids BigInt serialization issues
    }));

    res.json(cleanedStats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};


export const getWeeklyOccupancy = async (req, res) => {
  try {
    const totalRooms = 20;
    const startOfWeek = dayjs().startOf('week').add(1, 'day'); // Monday
    const endOfWeek = startOfWeek.add(6, 'day'); // Sunday

    const bookings = await prisma.reservation.findMany({
      where: {
        status: { in: ['CHECKED_IN'] },
        checkInDate: {
          gte: startOfWeek.toDate(),
          lte: endOfWeek.toDate(),
        },
      },
    });

    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = startOfWeek.add(i, 'day');
      const dayLabel = date.format('ddd'); // Mon, Tue...
      const occupied = bookings.filter(booking =>
        dayjs(booking.checkInDate).isSame(date, 'day')
      ).length;

      return {
        day: dayLabel,
        occupancyRate: Number(((occupied / totalRooms) * 100).toFixed(2)),
      };
    });

    res.json(weekDays);
  } catch (error) {
    console.error("Weekly Occupancy Error:", error);
    res.status(500).json({ error: "Failed to fetch occupancy stats" });
  }
};
