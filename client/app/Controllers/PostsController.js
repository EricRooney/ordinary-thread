import store from "../store.js";
import postService from "../Services/PostsService.js";
import commentService from "../Services/CommentsService.js";

//Private
function _drawPost() {
  let template = store.State.activePost.Template;
  document.getElementById("post-template").innerHTML = template;
}
function _drawList() {
  let template = "";
  let post = store.State.posts;
  post.forEach(
    item =>
      (template += `<li>
    <div class="border rounded bg-light tasks" style="margin: 1em;">
  <h1 class="text-left" id="name">${item.title}<button class="fa fa-plus-circle" aria-hidden="true" onclick="app.postsController.setActivePost('${item.id}')"></button></h1>
</div>
</li>`)
  );
  document.getElementById("post-list").innerHTML = template;
}
// function _drawActivePost() {
//   let post = store.State.activePost;
//   document.getElementById("activePost").innerHTML = post.template;
// }

//Public
export default class PostsController {
  constructor() {
    store.State.activePost.Template = "";
    this.getPostAsync();
    _drawPost();
    _drawList();
    store.subscribe("posts", _drawList);
    store.subscribe("activePost", _drawPost);
  }
  setActivePost(id) {
    postService.setActivePost(id);
    this.getCommentAsync(id);
  }
  async getCommentAsync(id) {
    try {
      await commentService.getCommentAsync(id);
    } catch (error) {
      console.error(error);
    }
  }
  async getPostAsync() {
    try {
      await postService.getPostAsync();
    } catch (error) {
      console.error(error);
    }
  }
  async deletePostAsync(postId) {
    try {
      await postService.deletePostAsync(postId);
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
      await postService.addPostAsync(post);
    } catch (error) {
      console.error("[ERROR]:", error);
    }
  }
}
