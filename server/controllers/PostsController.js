import express from "express";
import postService from "../services/PostsService";
import commentsService from "../services/CommentsService";
export default class PostController {
  constructor() {
    this.router = express
      .Router()

      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/comments", this.getCommentByPostId)
      .get("/:name", this.getByName)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await postService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getCommentByPostId(req, res, next) {
    try {
      let data = await commentsService.getCommentByPostId();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await postService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getByName(req, res, next) {
    try {
      let data = await postService.getByName(req.params.name);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await postService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await postService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await postService.delete(req.params.id);
      return res.send("Yay U Done It, Its Gone!");
    } catch (error) {
      next(error);
    }
  }
}
