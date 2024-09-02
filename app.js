import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();
// app.use(cors());
app.use(cors({
  origin: 'https://gama-frontend-chi.vercel.app', // Specify the allowed origin
  credentials: true // If you need to allow credentials
}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Modify the root endpoint
app.get("/", (req, res) => {
  res.send("Healthy");
});



app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

export default app;
