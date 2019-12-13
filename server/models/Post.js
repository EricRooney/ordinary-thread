import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    userId: { type: String }, //need to put required back
    body: { type: String, required: true },
    img: { type: String },
    title: { type: String, required: true },
    thumbsUp: { type: Number },
    thumbsDown: { type: Number }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Post;
