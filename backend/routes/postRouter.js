import express from 'express';
import { addPost,  listposts, removeposts } from '../controllers/postControllers.js';
import multer from 'multer';

const postRouter = express.Router();

// Multer Storage Engine
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Multer upload configuration
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Allow only image and video file types
        if (!file.mimetype.startsWith('image') && !file.mimetype.startsWith('video')) {
            return cb(new Error('Please upload only images or videos.'));
        }
        cb(null, true);
    },
    limits: {
        files: 3 // Limit up to 3 files
    }
});

// POST /api/posts/add
postRouter.post("/add", upload.array("media", 3), addPost);
postRouter.get("/list",listposts);
postRouter.post("/remove",removeposts);

export default postRouter;
