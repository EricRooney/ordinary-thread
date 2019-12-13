import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    userId: { type: String, required: true },
    PostId: { type: String, required: true },
    body: { type: String, required: true },
    thumbsUp: { type: Number },
    thumbsDown: { type: Number }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;
