import express from 'express'

import cors from 'cors'
import * as dotenv from 'dotenv'


import connectDb from './mongodb/connect.js';

import postRoutes from './mongodb/routes/postRoutes.js'
import dalleRoutes from './mongodb/routes/dalleRoutes.js'

dotenv.config();
const app = express();

app.use(cors({
    origin:"*"
}));
app.use(express.json({limit:'50mb'}))


// routes

app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',dalleRoutes)


app.get('/',async(req,res)=>{
    res.send('Helo from DALLE-Ai')
})



const startServer=async()=>{
    try {
        connectDb(process.env.MONGODB_URL, )
        
        app.listen(8080,()=>
            console.log("Server running on port 'http://localhost:8080' ")
        )
    } catch (error) {
        console.log(error)
    }
}

startServer()
