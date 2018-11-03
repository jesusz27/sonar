import { TrackDetailController } from "../../controllers/trackDetail.controller";
import express from "express";

const trackDetailRoutes = express.Router();
const trackDetailController: TrackDetailController = new TrackDetailController();

trackDetailRoutes.get("/:idTrackDetail", (req, res) => {
    trackDetailController.findByIdTrack(req, res);
});
trackDetailRoutes.get("/id/:id", (req, res) => {
    trackDetailController.findById(req, res);
});
export default trackDetailRoutes;
