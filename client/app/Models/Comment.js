export default class Comment {
  constructor(data) {
    this.userId = data.userId;
    this.postId = data.postId;
    this.body = data.body;
    this.thumbsUp = data.thumbsUp;
    this.thumbsDown = data.thumbsDown;
    this.id = data.id;
  }

  get Template() {
    return /*html*/ `
    <div class="comment" style="margin-bottom: 10px; margin-top: 13px;">
    <a class="media-left" style="margin: 5px" href="#">
      <img src="http://lorempixel.com/40/40/people/2/">
    </a>
    <div class="media-body">
      <h4 class="media-heading user_name">USER NAME WILL GO HERE</h4>
      ${this.body}
      <p><small><button class="far fa-thumbs-down"><button class="far fa-thumbs-up"> - <button class="fas fa-trash" onclick="app.commentsController.deleteCommentAsync('${this.id}')"></button></small></p>
    </div>
  </div>`;
  }
}
