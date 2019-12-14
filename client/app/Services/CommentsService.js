import store from "../store.js";
import Comment from "../Models/Comment.js";
import PostsService from "../Services/PostsService";

// @ts-ignore
const _commentsApi = axios.create({
  baseURL: "//localhost:3000/api/comments",
  timeout: 8000
});

class CommentsService {
  async getOnePost(id) {
    try {
      await PostsService.getOnePostAsync(id);
    } catch (error) {
      console.error(error);
    }
  }
  async deleteCommentAsync(commentId) {
    let res = await _commentsApi.delete(commentId);
    console.log("deleted");
    this.getCommentAsync();
  }
  async getCommentAsync() {
    let res = await _commentsApi.get();
    let comment = res.data.map(c => new Comment(c));
    store.commit("comments", comment);
    console.log("from comment store", store.State.comments);
  }
  async addCommentAsync(comment) {
    let res = await _commentsApi.post("", comment);
    console.log("from comment service", res);
    this.getCommentAsync();
  }
}

const commentService = new CommentsService();
export default commentService;
