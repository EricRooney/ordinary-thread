import PostsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _drawPost() {
  let posts = store.State.posts;
  console.log("this is from the posts controller", posts);
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("posts", _drawPost);
  }
}
