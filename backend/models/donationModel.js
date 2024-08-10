import mongoose from 'mongoose'

const donationSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    descriptionofheading: { type: String, required: true },
    image: [{ type: String, required: true }]
})

const donationModels = mongoose.models.donation  || mongoose.model("donation",donationSchema);
export default donationModels;