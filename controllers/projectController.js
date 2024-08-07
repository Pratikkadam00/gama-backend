import Project from "../models/project.js";

export const createProject = async (req, res) => {
  const { name } = req.body;

  try {
    const project = new Project({ name, createdBy: req.user._id });
    await project.save();

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user._id });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Additional functions for file upload, update, and delete will be here
