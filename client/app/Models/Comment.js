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
    return `
    <a class="media-left" href="#">
      <img src="http://lorempixel.com/40/40/people/2/">
    </a>
    <div class="media-body">
      <h4 class="media-heading user_name">USER NAME WILL GO HERE</h4>
      ${this.body}
      <p><small><a href="">Like</a> - <a href="">Share</a></small></p>
    </div>
  </div>`;
  }
}
