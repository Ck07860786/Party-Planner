import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
} from "../Controllers/authController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);
router.get("/user-auth",requireSignIn,(req,res)=>{
  res.status(200).send({ok:true})
})
//admin route
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
  res.status(200).send({ok:true})
})

export default router;



