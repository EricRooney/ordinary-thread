import mongoose from "mongoose";
import Comment from "../models/Comment";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Comment", Comment);

class CommentsService {
  async getAll() {
    //NOTE This is for testing, make sure to remove before production
    return await _repository.find({});
  }

  async getCommentByPostId(postId) {
    let data = await _repository.find({ postId: postId });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }

  async getById(id) {
    let data = await _repository.findOne({ _id: id });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update, activeUserId) {
    //TODO Come back and make this one request to the server

    // let userData = await _repository.findById({ id: id });
    // if (userData.id !== activeUserId) {
    //   throw new ApiError("You're not the user who wrote this", 400);
    // } else {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }
  //}
  // async delete(id, activeUserId) {
  //   let data = await _repository.findOneAndDelete({ _id: id });
  //   if (!data) {
  //     throw new ApiError("Invalid Id", 400);
  //   }
  // }

  async delete(id, activeUserId) {
    //TODO Come back and make this one request to the server
    // let userData = await _repository.findById({ id: id });
    // if (userData.id !== activeUserId) {
    //   throw new ApiError("You shall not pass!", 400);
    // } else {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
  }
}
//}

const commentService = new CommentsService();
export default commentService;
