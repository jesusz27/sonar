import mongoose from "mongoose";

const Person = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    birthdate: { type: Date },
    phone: { type: Number },
    user: { type: [mongoose.Schema.Types.ObjectId], ref: "User", autopopulate: true },
});
Person.plugin(require(`mongoose-autopopulate`));
const PersonSchema = mongoose.model("Person", Person);
export default PersonSchema;