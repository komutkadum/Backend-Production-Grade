// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({path:'./env'});

connectDB();

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