import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
    statusofdonationshow: { type: Boolean, required: true }
});

const showModels = mongoose.models.Show || mongoose.model("Show", showSchema);
export default showModels;
