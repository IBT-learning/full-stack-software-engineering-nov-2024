import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userControllers.js";

const router = Router();


// Endpoint to create/register a User
router.post("/register", registerUser);
router.post("/login", loginUser);


export default router