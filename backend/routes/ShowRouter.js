import express from 'express';
import { addShowDonation, listShowDonation } from '../controllers/ShowController.js';

const donationSHowRouter = express.Router();


donationSHowRouter.post("/add", addShowDonation);
donationSHowRouter.get("/list",listShowDonation);

export default donationSHowRouter;