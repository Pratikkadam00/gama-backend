import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
