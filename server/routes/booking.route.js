import { Router } from "express";
import { sendRequest } from "../controllers/booking.controller.js";



const router = Router()




// ROUTES FOR BOOKINGS

router.post('/add-request' , sendRequest)




export default router