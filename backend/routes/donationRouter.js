import express from 'express';
import multer from 'multer';
import { addDonation, listDonation, removeDonation } from '../controllers/donationController.js';

const donationRouter = express.Router();


//Image Storage Engine

const storage = multer.diskStorage({
    destination: "donation",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage })
donationRouter.post("/add", upload.single("image"), addDonation);
donationRouter.get("/list",listDonation)
donationRouter.post("/remove",removeDonation)

export default donationRouter;