import PostsController from "./Controllers/PostsController.js";
import CommentsController from "./Controllers/CommentsController.js";
import UsersController from "./Controllers/UsersController.js";

class App {
  postsController = new PostsController();
  commentsController = new CommentsController();
  usersController = new UsersController();
}

window["app"] = new App();
