import express from 'express';
import {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  updateReservationStatus,
  getReservationStats,
  getDailyBookingStats,
  getWeeklyOccupancy,
} from '../controllers/booking.controller.js';
import { verifyToken } from '../middlewares/auth.js';
const router = express.Router();

router.post('/', createReservation);
router.get('/', verifyToken , getAllReservations);

router.get('/stats', verifyToken , getReservationStats);
router.get("/stats/daily-bookings", verifyToken , getDailyBookingStats);
router.get("/stats/weekly-occupancy",  verifyToken , getWeeklyOccupancy);

router.get('/:id', getReservationById);
router.put('/:id',verifyToken , updateReservation);
router.delete('/:id', verifyToken , deleteReservation);
router.patch('/:id/status', verifyToken, updateReservationStatus);


export default router;
