import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
        mediaType: {
            type: String,
            enum: ["mp4", "txt", "pdf", "doc", "mov", "youtube", "rss"],
            required: true,
        },
        link: { type: String }, 
        description: { type: String }
    },
    { timestamps: true }
);

export default mongoose.model("Media", mediaSchema);
