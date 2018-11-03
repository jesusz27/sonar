import mongoose from "mongoose";

const User = new mongoose.Schema({
    idUser: { type: String, required: true },
    password: { type: String, required: true},
    email: { type: String, required: true},
    idNotification: { type: String},
    avatar: { type: String},
});

const UserSchema = mongoose.model("User", User);
export default UserSchema;