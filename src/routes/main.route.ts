import express from "express";

import dbRoutes from "./db/db.route";
import userRoutes from "./user/user.route";
import contactRoutes from "./contact/contact.route";
import trackRoutes from "./track/track.route";
import trackDetailRoutes from "./track-detail/trackDetail.route";
import authRoutes from "./auth/auth.route";
import personRoutes from "./person/person.route";
const api = express.Router();

api.use("/db", dbRoutes);
api.use("/user", userRoutes);
api.use("/contact", contactRoutes);
api.use("/track", trackRoutes);
api.use("/trackDetail", trackDetailRoutes);
api.use("/auth", authRoutes);
api.use("/person", personRoutes);
export default api;