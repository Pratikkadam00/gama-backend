import express from "express";
import {
  createProject,
  getProjects,
  uploadMedia,
  updateMedia,
  deleteMedia,
  getAllMedia
} from "../controllers/projectController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createProject);
router.get("/", protect, getProjects);
router.post("/:projectId", protect, uploadMedia);
router.put("/:mediaId", protect, updateMedia);
router.delete("/:mediaId", protect, deleteMedia);
router.get("/:projectId/AllMedia", protect, getAllMedia);


export default router;
