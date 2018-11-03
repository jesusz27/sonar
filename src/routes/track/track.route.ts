import { TrackController } from "../../controllers/track.controller";
import express from "express";

const trackRoutes = express.Router();
const trackController: TrackController = new TrackController();

trackRoutes.get("/:idTrack", (req, res) => {
    trackController.findByIdTrack(req, res);
});
trackRoutes.get("/user/:idUser", (req, res) => {
    trackController.findByCodUser(req, res);
});
trackRoutes.get("/contact/:idUser", (req, res) => {
    trackController.findByCodContact(req, res);
});
export default trackRoutes;
