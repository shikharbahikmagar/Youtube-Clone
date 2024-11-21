import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {

    app.listen(process.env.PORT || 3000, () => {

        console.log(`Server is running on port ${process.env.PORT || 3000}`)
    })

    app.on("error", (error) => {

        console.log("errrors:", error);

        throw error;
    })
})
.catch((error) => {
    console.log("mongodb connection error: " + error);
})


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({ 
    extended: true,
    limit: "16kb"

}))

app.use(express.static("public"))
app.use(cookieParser())

//import route
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";

//route declaration
app.use("/api/v1/users", userRouter);

app.use("/api/v1/videos", videoRouter);

app.get("/", (req, res) => {
    res.json("hello");
})
