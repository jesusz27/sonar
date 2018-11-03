import { ContactController } from "../../controllers/contact.controller";
import express from "express";

const contactRoutes = express.Router();
const contactController: ContactController = new ContactController();

const ID = "/:id";
const STATUS = "/:status";

contactRoutes.post("", (req, res) => {
    contactController.create(req, res);
});
contactRoutes.get("/:idUser", (req, res) => {
    contactController.findByCodUser(req, res);
});
contactRoutes.put(ID + STATUS, (req, res) => {
    contactController.update(req, res);
});
contactRoutes.delete(ID, (req, res) => {
    contactController.delete(req, res);
});
export default contactRoutes;
