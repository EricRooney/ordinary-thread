import CommentsService from "../Services/CommentsService.js";
import store from "../store.js";

//Private
function _drawComment() {
  let comments = store.State.comments;
  console.log("From the comments controller", comments);
}

//Public
export default class CommentsController {
  constructor() {
    _drawComment();
    store.subscribe("comments", _drawComment);
  }
}
