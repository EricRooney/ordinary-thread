import mongoose from "mongoose";
import Comment from "../models/Comment";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Comment", Comment);

class PostService {
  async getAll() {
    return await _repository.find({});
  }

  async getPostByUser(userId) {
    return await _repository.find({ userId: userId });
  }

  async getById(id) {
    let data = await _repository.findOne({ _id: id });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async getByName(searchName) {
    let data = await _repository.findOne({ name: searchName });
    if (!data) {
      throw new ApiError("Invalid Name", 400);
    }
    return data;
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
  }
}

const commentService = new CommentsService();
export default commentService;
