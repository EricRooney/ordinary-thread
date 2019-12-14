export default class Post {
  constructor(data) {
    this.userId = data.userId;
    this.body = data.body;
    this.img = data.url;
    this.title = data.title;
    this.thumbsUp = data.thumbsUp;
    this.thumbsDown = data.thumbsDown;
    this.id = data.id;
  }

  get Template() {
    return /*html*/ `
    <div>
              <div class="row no-gutters" style="box-shadow: 2px 5px 16px -3px #000000">
              <h2 class="card-title">${this.title}</h2>
                <div class="col-1 text-center post" style="margin-right: 10px">
                  <img src="https://placehold.it/25x25" class="card-img rounded-circle" alt="..." />
                </div>
                <div class="col-md-3 post">
                  <img src="https://placehold.it/25x25" class="card-img" alt="..." />
                </div>
                <div class="col-md-3 post">
                  <div class="card-body">
                    
                    <button class="fas fa-trash" onclick="app.postsController.deletePostAsync('${this.id}')"></button><button class="far fa-edit"></button>

                    <p class="card-text">
                      ${this.body}
                    </p>
                    <button class="fas fa-thumbs-up"></button>
                  <h4>800</h4>
                  <button class="far fa-thumbs-down"></button>
                    <p class="card-text">
                      Comments
                      <form onsubmit="app.commentsController.addCommentAsync(event)">
                        <input name="body" type="text" placeholder="What'cha got on tap?">
                        <button>submit</button>
                      </form>
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div id="comment"></div>
            `;
  }
}
