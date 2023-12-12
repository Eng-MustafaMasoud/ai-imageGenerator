import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import cors from 'cors'
import Post from '../model/post.js';


const app =express()
app.use(cors());

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: 'dyhmmd4fj',
  api_key: '958469966393772',
  api_secret: 'rIkTJC6LZlwgGF5jtLGPX6wRBrY',
  secure: true
});

router.route('/').get(async (req, res) => {
  try {

    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

router.route('/').post(async(req, res) => {
  try {

    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;
