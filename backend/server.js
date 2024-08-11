import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import postRouter from "./routes/postRouter.js";
import donationRouter from "./routes/donationRouter.js";
import donationSHowRouter from "./routes/ShowRouter.js";


//app cconfig 

const app = express();
const port = process.env.PORT || 4000;


//middlewares

app.use(express.json())
app.use(cors())

// Connect Db

connectDB();

//Api EndPoints for posts

app.use("/api/post",postRouter)
app.use("/media",express.static("uploads"))

//Api EndPoints for Donation Images and text

app.use("/api/donation",donationRouter)
app.use("/images",express.static("donation"))

//Api EndPoints for Showing the status of donation screen

app.use("/api/donationStatus",donationSHowRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})