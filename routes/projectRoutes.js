import express from "express";
import {
  createProject,
  getProjects,
  uploadMedia,
  updateMedia,
  deleteMedia,
  getAllMedia,
} from "../controllers/projectController.js";
// import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.post("/:projectId", uploadMedia);
router.put("/:mediaId", updateMedia);
router.delete("/:mediaId", deleteMedia);
router.get("/:projectId/AllMedia", getAllMedia);

export default router;
