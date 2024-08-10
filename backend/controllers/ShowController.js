import showModels from "../models/ShowModel.js";

// Add food item
const addShowDonation = async (req, res) => {


    const showDonation = new showModels({
        statusofdonationshow: req.body.statusofdonationshow
    });

    try {
        await showDonation.save();
        res.json({ success: true, message: "Donation Post Status Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


//all food list

const listShowDonation = async (req, res) => {
    try {
        const donationPost = await showModels.find({});
        res.json({ success: true, data: donationPost })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { addShowDonation, listShowDonation };
