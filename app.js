import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();


const corsOptions = {
  origin: 'https://gama-frontend-chi.vercel.app', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};

app.use(cors(corsOptions)); 
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

export default app;
