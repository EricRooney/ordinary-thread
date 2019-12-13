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
    <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-1 text-center">
                  <img src="https://placehold.it/25x25" class="card-img" alt="..." />
                  
                  <button class="fas fa-thumbs-up"></button>
                  <h4>800</h4>
                  <button class="far fa-thumbs-down"></button>
                 
                </div>
                <div class="col-md-3">
                  <img src="https://placehold.it/25x25" class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${this.title}<button onclick="app.postsController.deletePostAsync('${this.id}')">X</button><button>EDIT</button></button></h5>

                    <p class="card-text">
                      ${this.body}
                    </p>
                    <p class="card-text">
                      Comments<input type="text" placeholder="What'cha got on tap?"></Comments<input>
                    </p>
                  </div>
                </div>
              </div>
            </div>`;
  }
  // This will go back into line car-title
  //onclick="app.postsController.deletePostAsync()"
}
