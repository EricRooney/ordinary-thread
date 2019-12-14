import store from "../store.js";
import post from "../Models/Post.js";
import Post from "../Models/Post.js";
import commentService from "./CommentsService.js";

// @ts-ignore
const _postsApi = axios.create({
  baseURL: "//localhost:3000/api/posts",
  timeout: 8000
});

class PostsService {
  async deletePostAsync(postId) {
    let res = await _postsApi.delete(postId);
    console.log("deleted");
    this.getPostAsync();
  }
  async getPostAsync() {
    let res = await _postsApi.get();
    let post = res.data.map(p => new Post(p));
    store.commit("posts", post);
    console.log("from store", store.State.posts);
  }
  async getOnePostAsync(id) {
    let res = await _postsApi.get(id);
    let post = res.data.map(p => new Post(p));
    store.commit("posts", post);
    //commentService.getCommentsByPostId(id)
    console.log("from store", store.State.posts);
  }
  async addPostAsync(post) {
    debugger;
    let res = await _postsApi.post("", post);
    console.log("from post service", res);
    this.getPostAsync();
  }
}

const postService = new PostsService();
export default postService;
