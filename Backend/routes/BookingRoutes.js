import express from 'express';
import { addBooking, getInProgressBooking, getUserBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/addBooking', addBooking);
router.get('/userBookings', getUserBookings);
router.get('/inProgress', getInProgressBooking);


export default router;