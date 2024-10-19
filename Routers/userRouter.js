import express from "express"
import { isAuth } from "../Middleware/isAuth.js"
import { loginUser, myProfile, registerUser, verifyUser } from "../Controllers/user.js";

const router = express.Router();

router.post("/user/register",registerUser)
router.post('/user/verify',verifyUser)
router.post('/user/login',loginUser)
router.get('/user/me',isAuth,myProfile)

export default router;