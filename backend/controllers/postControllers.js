import PostModels from "../models/PostModels.js";
import fs from 'fs';

// Add Post
const addPost = async (req, res) => {
    const { title, description, category, linktofb } = req.body;
    const media_filenames = req.files.map(file => file.filename); // Array of media filenames

    try {
        const newPost = new PostModels({
            title,
            description,
            media: media_filenames, // Save media files
            category,
            linktofb
        });

        await newPost.save();
        res.json({ success: true, message: "Post Added" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error adding post" });
    }
};


// List All Posts

const listposts = async (req, res) => {
    try {
        const posts = await PostModels.find({});
        res.json({ success: true, data: posts })
    }
    catch (error) {
        console.log(error)
        res.json({ success: true, message: "Error" })
    }
}

// Remove Posts

const removeposts = async (req, res) => {
    try {
        const posts = await PostModels.findById(req.body.id);
        console.log(posts.media[1])
        for (let i = 0; i < posts.media.length; i++) {
            fs.unlink(`uploads/${posts.media[i]}`,()=>{})
            await PostModels.findByIdAndDelete(req.body.id)
            
        }
        res.send({ success: true, message:"Post Removed" })

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}
export { addPost, listposts, removeposts };
