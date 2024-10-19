import express from "express";
import { isAuth } from "../Middleware/isAuth.js";
import { addadress, deleteAddress, fetchAllAddress, getSingleAddress } from "../Controllers/address.js";


const router = express.Router();

router.post("/address/new",isAuth,addadress)
router.get("/address/all",isAuth,fetchAllAddress)
router.get("/address/:id",isAuth,getSingleAddress)
router.delete("/address/:id",isAuth,deleteAddress)


export default router;