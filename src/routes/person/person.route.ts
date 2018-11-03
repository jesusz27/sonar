import { PersonController } from "../../controllers/person.controller";
import express from "express";

const personRoutes = express.Router();
const personController: PersonController = new PersonController();

personRoutes.post("/:idUser", (req, res) => {
    personController.create(req, res);
});
personRoutes.put("", (req, res) => {
    personController.update(req, res);
});
personRoutes.get("/:idUser", (req, res) => {
    personController.findByIdUser(req, res);
});
export default personRoutes;
