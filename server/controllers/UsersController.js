import express from "express";
import userService from "../services/UsersService";

export default class UserController {
  constructor() {
    this.router = express
      .Router()

      .get("", this.getAll) //This is for testing, make sure to remove before production
      .get("/:id", this.getById)
      .get("/:name", this.getByName)
      //.get("/:user", this.getPostsByUser) recomment in later
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    //This is for testing, make sure to remove before production
    try {
      let data = await userService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await userService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getByName(req, res, next) {
    try {
      let data = await userService.getByName(req.params.name);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  /*asysnc getPostsByUser(req, res, next){ Fix later
    try {
      let data = await postService.getPostsByUser()
    } catch (error) {
      next(error);
    }
  }*/

  async create(req, res, next) {
    try {
      let data = await userService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await userService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await userService.delete(req.params.id);
      return res.send("Yay U Done It, Its Gone!");
    } catch (error) {
      next(error);
    }
  }
}
