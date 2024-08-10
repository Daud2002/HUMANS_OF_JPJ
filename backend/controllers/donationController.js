import donationModels from "../models/donationModel.js";
import fs from 'fs';

// Add food item
const addDonation = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new donationModels({
        heading: req.body.heading,
        descriptionofheading: req.body.descriptionofheading,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Donation Post Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


//all food list

const listDonation = async (req, res) => {
    try {
        const donationPost = await donationModels.find({});
        res.json({ success: true, data: donationPost })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// Remove Food

const removeDonation = async (req, res) => {
    try {
        const donationPost = await donationModels.findById(req.body.id);
        fs.unlink(`donation/${donationPost.image}`, () => { })
        await donationModels.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Donation Post Removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}
export { addDonation, removeDonation, listDonation };
