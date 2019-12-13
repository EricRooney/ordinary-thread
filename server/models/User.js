import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    img: {
      type: String,
      default: `http://robohash.org/${this.name}?`
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;
