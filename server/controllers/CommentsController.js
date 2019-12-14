import express from "express";
import commentsService from "../services/CommentsService";

export default class CommentsController {
  constructor() {
    this.router = express
      .Router()

      .get("", this.getAll) //This is for testing, make sure to remove before production
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    //This is for testing, make sure to remove before production
    try {
      let data = await commentsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await commentsService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await commentsService.edit(
        req.params.id,
        req.body,
        req.activeUserId
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await commentsService.delete(req.params.id);
      return res.send("Yay U Done It, Its Gone!");
    } catch (error) {
      next(error);
    }
  }
}
