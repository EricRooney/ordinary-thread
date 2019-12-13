export default class Comment {
  constructor(data) {
    this.userId = data.userId;
    this.postId = data.postId;
    this.body = data.body;
    this.thumbsUp = data.thumbsUp;
    this.thumbsDown = data.thumbsDown;
  }

  get Template() {
    return this.body;
  }
}
