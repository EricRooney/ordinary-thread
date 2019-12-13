import commentService from "../Services/CommentsService.js";
import store from "../store.js";
import Comment from "../Models/Comment.js";

//Private
function _drawComment() {
  let template = "";
  let comment = store.State.comments;
  comment.forEach(c => (template += c.Template));
  document.getElementById("").innerHTML = template;
  console.log("this is from the posts controller", post);
}

//Public
export default class CommentsController {
  constructor() {
    commentService.getCommentsAsync();
    _drawComment();
    store.subscribe("comments", _drawComment);
  }
  async deleteCommentAsync(commentId) {
    try {
      await commentService.deleteCommentAsync(commentId);
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

  async addCommentAsync(event) {
    event.preventDefault();
    let form = event.target;
    let comment = {
      title: form.title.value,
      img: form.img.value,
      body: form.body.value
    };
    console.log("we GOT HERE", comment);
    try {
      await commentService.addCommentAsync(comment);
    } catch (error) {
      console.error("[ERROR]:", error);
    }
  }
}
