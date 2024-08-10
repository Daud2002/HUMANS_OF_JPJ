import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    media: [{ type: String, required: true }], // Array to store image and video file paths
    category: { type: String, required: true },
    linktofb:{type:String, required: true}
},
{
    timestamps:true
});

const PostModels = mongoose.models.Post || mongoose.model("Post", postSchema);
export default PostModels;
