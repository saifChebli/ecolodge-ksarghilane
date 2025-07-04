import { Router } from "express";
import { createAccount, getAccount, getAllAccounts, login, logout, updateAccount } from "../controllers/users.controller.js";
import { checkRole } from "../middlewares/checkRole.js";
import { verifyToken } from "../middlewares/auth.js";



const router = Router()




// ROUTES FOR Users

router.post('/login' , login)
router.get('/logout' , logout)

// Private routes for Super Admin

router.get('/all-users' , checkRole , verifyToken , getAllAccounts)
router.post('/add-user' , checkRole , verifyToken , createAccount)


// Private routes for Admin & Super Admin

router.get('/profile' , verifyToken ,getAccount)
router.put('/update-profile' ,verifyToken, updateAccount)

export default router