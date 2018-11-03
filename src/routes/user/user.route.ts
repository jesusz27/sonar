import { UserController } from "../../controllers/user.controller";
import express from "express";
const fileUpload = require("express-fileupload");
const userRoutes = express.Router();
const userController: UserController = new UserController();

userRoutes.get("/:idUser", (req, res) => {
    userController.findByIdUser(req, res);
});
userRoutes.get("", (req, res) => {
    userController.findAll(req, res);
});
userRoutes.put("/notification", (req, res) => {
    userController.updateIdNotification(req, res);
});
userRoutes.put("/pass", (req, res) => {
    userController.updatePassword(req, res);
});
userRoutes.post("/avatar/:idUser", fileUpload(), (req: any, res) => {
    userController.updateAvatar(req, res);
});
export default userRoutes;
