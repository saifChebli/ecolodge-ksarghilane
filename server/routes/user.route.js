import { Router } from "express";
import { createAccount, getAccount, getAllAccounts, getAllAdminsAccount, login, logout, updateAccount, updatePassword } from "../controllers/users.controller.js";
import { checkRole } from "../middlewares/checkRole.js";
import { verifyToken } from "../middlewares/auth.js";



const router = Router()




// ROUTES FOR Users

router.post('/login' , login)
router.get('/logout' , logout)

// Private routes for Super Admin

router.get('/all-users' , checkRole , verifyToken , getAllAccounts)
router.post('/add-user' , checkRole , verifyToken , createAccount)
router.get('/admins' , checkRole , verifyToken , getAllAdminsAccount)

// Private routes for Admin & Super Admin

router.get('/profile' , verifyToken ,getAccount)
router.patch('/update-profile' ,verifyToken, updateAccount)
router.patch('/update-password' ,verifyToken, updatePassword)

export default router