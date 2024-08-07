import express from "express";
import {
  createProject,
  getProjects,
} from "../controllers/projectController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createProject);
router.get("/", protect, getProjects);

// Additional routes for file upload, update, and delete will be here

export default router;
