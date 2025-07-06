import prisma from "../db/prisma.js";
import Joi from "joi";
import { sendEmail } from "../utils/sendMail.js";
import { generateReservationEmail } from "../utils/reservationTemplate.js";



const reservationSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(4).required(),
  roomType: Joi.string().valid('STANDARD', 'SUITE').required(),
  adults: Joi.number().integer().min(0).required(),
  children: Joi.number().integer().min(0).required(),
  checkInDate: Joi.date().required(),
  checkOutDate: Joi.date().required(),
  status: Joi.string().valid('PENDING', 'ACCEPTED', 'DECLINED').optional()
});


export const createReservation = async (req, res) => {
  try {
    const { error, value } = reservationSchema.validate(req.body.data);
   
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const reservation = await prisma.reservation.create({
      data: value,
    });

    // send email to admin
    await sendEmail({
      to: 'cheblii.saifeddine@gmail.com',
      subject: '📩 New Reservation Request',
      html: generateReservationEmail(req.body.data),
    });

    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create reservation' });
    console.log(err)
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reservations' });
  }
};

export const getReservationById = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await prisma.reservation.findUnique({ where: { id: Number(id) } });
    if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reservation' });
  }
};

export const updateReservationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const statusSchema = Joi.string().valid('PENDING', 'ACCEPTED', 'DECLINED').required();
  const { error } = statusSchema.validate(status);

  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const updated = await prisma.reservation.update({
      where: { id: Number(id) },
      data: { status }
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update reservation status' });
  }
};


export const updateReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const { error, value } = reservationSchema.validate(req.body, { allowUnknown: true, presence: 'optional' });
    if (error) return res.status(400).json({ error: error.details[0].message });

    const updated = await prisma.reservation.update({
      where: { id: Number(id) },
      data: value,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update reservation' });
  }
};

export const deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reservation.delete({ where: { id: Number(id) } });
    res.json({ message: 'Reservation deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete reservation' });
  }
};