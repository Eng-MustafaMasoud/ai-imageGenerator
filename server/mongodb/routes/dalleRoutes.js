import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import OpenAI from 'openai';
const app =express()
app.use(cors());

dotenv.config()
const router =express.Router()

const openai = new OpenAI({
    apiKey: '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'
  });

router.route('/').post(async(req,res)=>{
   try {
        res.set('Access-Control-Allow-Origin', 'https://ai-image-generator-flax.vercel.app/');

       const {prompt}=req.body
       const aiResponse=await openai.images.generate(
       { 
        prompt,
       n:1,
        size:'1024x1024',
        response_format:'b64_json'}
       )

       const image=aiResponse.data[0].b64_json

       res.status(200).json({photo:image})
   } catch (error) {
    console.log(error)
    res.status(500).send(error?.response.data.error.message)
   }
})

export default router
