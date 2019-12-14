import commentService from "../Services/CommentsService.js";
import store from "../store.js";
import Comment from "../Models/Comment.js";

//Private
function _drawComment() {
  let template = "";
  let comment = store.State.comments;
  console.log("this is from the comment controller", comment);
  comment.forEach(c => (template += c.Template));

  document.getElementById("comment").innerHTML = template;
}

//Public
export default class CommentsController {
  constructor() {
    console.log("from the comment controller");
    store.subscribe("comments", _drawComment);
    store.subscribe("activePost", _drawComment);
  }

  async deleteCommentAsync(commentId) {
    try {
      await commentService.deleteCommentAsync(commentId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  async addCommentAsync(event) {
    event.preventDefault();
    let form = event.target;
    let comment = {
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
