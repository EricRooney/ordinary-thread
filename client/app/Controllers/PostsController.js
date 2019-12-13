import PostsService from "../Services/PostsService.js";
import store from "../store.js";
import post from "../Models/Post.js";

//Private
function _drawPost() {
  let template = "";
  let post = store.State.posts;
  post.forEach(p => (template += p.Template));
  document.getElementById("post-template").innerHTML = template;
  console.log("this is from the posts controller", post);
}

//Public
export default class PostsController {
  constructor() {
    _drawPost();
    store.subscribe("posts", _drawPost);
  }
  async deletePostAsync(postId) {
    try {
      await PostsService.deletePostAsync(postId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
