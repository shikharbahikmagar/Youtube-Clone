import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: 'https://youtube-clone-ten-coral.vercel.app/',
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

<<<<<<< HEAD
app.get("/", (req, res) => {
    res.json("hello");
})


export { app }
=======
export { app }
>>>>>>> 515f0c368d310d391e8aea40052b47225d3c7785
