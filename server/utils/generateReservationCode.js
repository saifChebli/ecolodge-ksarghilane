import prisma from "../db/prisma.js";

export const generateReservationCode = async () => {
  const currentYear = new Date().getFullYear(); // e.g. 2025

  // Count how many reservations exist this year
  const count = await prisma.reservation.count({
    where: {
      createdAt: {
        gte: new Date(`${currentYear}-01-01T00:00:00Z`),
        lt: new Date(`${currentYear + 1}-01-01T00:00:00Z`),
      },
    },
  });

  // Pad the number to 4 digits
  const paddedNumber = String(count + 1).padStart(4, '0');

  return `R-${currentYear}-${paddedNumber}`; // e.g. R-2025-0001
};
