// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

// env config
dotenv.config({path:'./env'});




// database connection
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Express error ", error);
        throw error;
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server running on port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed ", err)
})

/*
First approach
// IIFE
// Semi colon is for professional approach
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Errr: ", error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
        throw error;
    }
})()
*/