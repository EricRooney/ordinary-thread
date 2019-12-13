import express from "express";
import usersService from "../services/UsersService";
import postsService from "../services/PostsService";

export default class UserController {
  constructor() {
    this.router = express
      .Router()

      .get("", this.getAll) //This is for testing, make sure to remove before production
      .get("/:id", this.getById)
      .get("/:name", this.getByName)
      .get("/:id/posts", this.getPostsByUser)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    //This is for testing, make sure to remove before production
    try {
      let data = await usersService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await usersService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getByName(req, res, next) {
    try {
      let data = await usersService.getByName(req.params.name);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getPostsByUser(req, res, next) {
    try {
      let data = await postsService.getPostsByUser(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await usersService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await usersService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await usersService.delete(req.params.id);
      return res.send("Yay U Done It, Its Gone!");
    } catch (error) {
      next(error);
    }
  }
}
