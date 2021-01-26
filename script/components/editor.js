export default class Login {
  constructor() {
    this.element = document.querySelector('.editor');
  }

  hide() {
    this.element.classList.add('hide');
  }

  show() {
    this.element.classList.remove('hide');
  }
}
