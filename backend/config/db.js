import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://daudmir3:$mithi$1500.@cluster0.ydjifra.mongodb.net/Humans_Of_JPJ').then(()=>console.log("DB Connected"))
}