import dictionary from '../dictionary';

export default class Login {
  constructor() {
    this.element = document.querySelector('.login');
    this.message = this.element.querySelector('.incorrect');
    this.waiter = this.element.querySelector('.waiter');
    this.updateLang();
  }

  updateLang() {
    this.element.querySelector('.title').textContent = dictionary[dictionary.lang].login;
    this.element.querySelector('.button').textContent = dictionary[dictionary.lang].loginButton;
    this.element.querySelectorAll('.textfield')[0].placeholder = dictionary[dictionary.lang].loginProfileName;
    this.element.querySelectorAll('.textfield')[1].placeholder = dictionary[dictionary.lang].loginPassword;
    this.element.querySelector('.login_sign-up-link').textContent = dictionary[dictionary.lang].loginToSignUp;
  }

  hide() {
    this.element.classList.add('hide');
  }

  show() {
    this.hideMessage();
    this.element.classList.remove('hide');
  }

  showMessage(message) {
    this.message.textContent = message;
    this.message.classList.remove('hide');
  }

  hideMessage() {
    this.message.classList.add('hide');
  }

  showWaiter() {
    this.waiter.classList.remove('hide');
  }

  hideWaiter() {
    this.waiter.classList.add('hide');
  }
}