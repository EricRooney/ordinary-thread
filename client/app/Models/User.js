export default class User {
  constructor(data) {
    this.name = data.name;
    this.img = data.img;
  }

  get Template() {
    return this.name;
  }
}
