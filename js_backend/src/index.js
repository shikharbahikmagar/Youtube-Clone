import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config({ path: './.env' });

// Initialize Express app
const app = express();

// Middleware setup
app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL when deployed
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import routes
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";

// Route declarations
app.use("/api/v1/users", userRouter);
app.use("/api/v1/videos", videoRouter);

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
