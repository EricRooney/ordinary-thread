import PostsService from "../Services/PostsService.js";
import store from "../store.js";

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
    PostsService.getPostAsync();
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
  // async editPostAsync(postId) {
  //   try {
  //     await PostsService.editPostAsync(postId);
  //   } catch (error) {
  //     debugger;
  //     console.error("[ERROR]:", error);
  //   }
  // }

  async addPostAsync(event) {
    event.preventDefault();
    let form = event.target;
    let post = {
      title: form.title.value,
      img: form.img.value,
      body: form.body.value
    };
    console.log("we GOT HERE", post);
    try {
      await PostsService.addPostAsync(post);
    } catch (error) {
      console.error("[ERROR]:", error);
    }
  }
}
