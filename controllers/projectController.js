import Project from "../models/project.js";
import Media from "../models/media.js";

export const createProject = async (req, res) => {
  const { name, userId } = req.body;

  try {
    const project = new Project({ name, userId });
    await project.save();

    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProjects = async (req, res) => {
  const { userId } = req.params;
  try {
    const projects = await Project.find({ userId }).sort({ updatedAt: -1 });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const uploadMedia = async (req, res) => {
  const { projectId } = req.params;
  const { name, mediaType, link, fileSize, description } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const media = new Media({
      name,
      project: projectId,
      mediaType,
      link,
      fileSize,
      description,
    });
    await media.save();

    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateMedia = async (req, res) => {
  const { mediaId } = req.params;
  const { name, mediaType, link, fileSize, description } = req.body;

  try {
    const media = await Media.findById(mediaId);
    if (!media) {
      return res.status(404).json({ error: "Media not found" });
    }

    media.name = name || media.name;
    media.mediaType = mediaType || media.mediaType;
    media.link = link || media.link;
    media.fileSize = fileSize || media.fileSize;
    media.description = description || media.description;

    await media.save();

    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteMedia = async (req, res) => {
  const { mediaId } = req.params;

  try {
    const media = await Media.findById(mediaId);

    if (!media) {
      return res.status(404).json({ error: "Media not found" });
    }

    await media.deleteOne();

    res.status(200).json({ message: "Media deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllMedia = async (req, res) => {
  const { projectId } = req.params;

  try {
    const mediaFiles = await Media.find({ project: projectId });

    res.status(200).json(mediaFiles);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
