import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI;

app.get("/",(req,res)=>{
  res.send("Healthy")
})
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

export default app;
