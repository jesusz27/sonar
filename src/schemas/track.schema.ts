import mongoose from "mongoose";

const Track = new mongoose.Schema({
    codUser: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    codContact: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    trackDetail: { type: mongoose.Schema.Types.ObjectId, ref: "TrackDetail", required: true },
    fecha: { type: Date },
});

const TrackSchema = mongoose.model("Track", Track);
export default TrackSchema;