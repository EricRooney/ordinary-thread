import UsersService from "../Services/UsersService.js";
import store from "../store.js";

//Private
function _drawUser() {
  let users = store.State.users;
  console.log("from the users controller", users);
}

//Public
export default class UsersController {
  constructor() {
    store.subscribe("users", _drawUser);
  }
}
