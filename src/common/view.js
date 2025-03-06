export class AbstractView {
  constructor() {
    this.app = document.getElementById("root"); //получает сам компонент аппа через html
  }
  setTitle(title) {
    document.title = title;
  }
  render() {
    return;
  }

  destroy() {
    return;
  }
}
