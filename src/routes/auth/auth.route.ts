import { AuthController } from "../../controllers/auth.controller";
import express from "express";

const authRoutes = express.Router();
const authController: AuthController = new AuthController();

authRoutes.post("/singup", (req, res) => {
    authController.singUp(req, res);
});
authRoutes.post("/login", (req, res) => {
    authController.logIn(req, res);
});

export default authRoutes;
