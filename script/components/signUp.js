import dictionary from '../dictionary';

export default class SignUp {
  constructor() {
    this.element = document.querySelector('.sign-up');
    this.message = this.element.querySelector('.incorrect');
    this.waiter = this.element.querySelector('.waiter');
    this.updateLang();
  }

  updateLang() {
    this.element.querySelector('.title').textContent = dictionary[dictionary.lang].signUp;
    this.element.querySelector('.button').textContent = dictionary[dictionary.lang].signUpButton;
    this.element.querySelectorAll('.textfield')[0].placeholder = dictionary[dictionary.lang].signUpProfileName;
    this.element.querySelectorAll('.textfield')[1].placeholder = dictionary[dictionary.lang].signUpEmail;
    this.element.querySelectorAll('.textfield')[2].placeholder = dictionary[dictionary.lang].signUpPassword;
    this.element.querySelectorAll('.textfield')[3].placeholder = dictionary[dictionary.lang].signUpRepeatPassword;
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
