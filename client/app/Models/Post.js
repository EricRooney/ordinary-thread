export default class Post {
  constructor(data) {
    this.userId = data.userId;
    this.body = data.body;
    this.img = data.img;
    this.title = data.title;
    this.thumbsUp = data.thumbsUp;
    this.thumbsDown = data.thumbsDown;
  }

  get Template() {
    return this.title;
  }
}
