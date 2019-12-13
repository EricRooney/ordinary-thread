import CommentsService from "../Services/CommentsService.js";
import store from "../store.js";

//Private
function _drawComment() {
  let template = "";
  let comment = store.State.comments;
  comment.forEach(c => (template += c.Template));
  document.getElementById("comment-template").innerHTML = template;
  console.log("this is from the comment controller", comment);
}

//Public
export default class CommentsController {
  constructor() {
    _drawComment();
    store.subscribe("comments", _drawComment);
  }
}
