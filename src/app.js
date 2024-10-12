import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cors setting
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
// for accepting json
app.use(express.json({limit: "16kb"}));
// for accepting through url
app.use(express.urlencoded({extended: true,limit: "16kb"}));
// for static files like images, videos etc
app.use(express.static("public"));
// for parsing cookies and setting
app.use(cookieParser());


export { app }