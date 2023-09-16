import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    aiName: {
      type: String,
      required: [true, "AI name is required."],
    },
    tags: {
      type: [String],
      required: [true, "Tag is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
  },
  { timestamps: true }
);

const PostModel = models.PostModel || model("PostModel", PostSchema);

export default PostModel;
