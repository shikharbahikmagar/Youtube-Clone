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
  'https://www.bahik.tech/', // Localhost (Development)
   // Vercel (Production)
];

// Dynamic origin check
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

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
