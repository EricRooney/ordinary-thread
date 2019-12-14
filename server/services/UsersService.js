import mongoose from "mongoose";
import User from "../models/User";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("User", User);

class UserService {
  async getAll() {
    //This is for testing, make sure to remove before production
    return await _repository.find({});
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
  async edit(id, update, activeUserId) {
    let userData = await _repository.findById({ id: id });
    if (userData.id !== activeUserId) {
      throw new ApiError("You're not the user who wrote this", 400);
    } else {
      let data = await _repository.findOneAndUpdate({ _id: id }, update, {
        new: true
      });
      if (!data) {
        throw new ApiError("Invalid Id", 400);
      }
      return data;
    }
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
  }
}

const userService = new UserService();
export default userService;
