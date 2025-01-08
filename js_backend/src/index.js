import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config({ path: './.env' });

// Initialize Express app
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);
});


const allowedOrigins = [
  'http://localhost:5173', // Localhost (Development)
  'https://www.bahik.tech', // Production Frontend
  'https://yt-clone-backend-pi.vercel.app', // Backend
  'https://youtube-clone-ten-coral.vercel.app', // Alternate Frontend
];

// Dynamic origin check
const corsOptions = {
  origin: (origin, callback) => {
    console.log(`Origin: ${origin}`); // Log origin for debugging
    // Allow requests with no origin (e.g., Postman or server-to-server requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials (e.g., cookies)
  methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers allowed in requests
};

app.use(cors(corsOptions));


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import routes
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";
import commentRouter from './routes/comment.routes.js'

// Route declarations
app.use("/api/v1/users", userRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/comments", commentRouter)

// Test route
app.get("/", (req, res) => {
  res.json("Hello, Vercel!");
});

// Database connection
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Export the app as a handler for Vercel
export default app;
