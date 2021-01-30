import dictionary from '../dictionary';
import axios from 'axios';
import { login } from './Auth';

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
    this.element.querySelector('.button_agree').addEventListener('click', this.submitForm.bind(this));
    this.element.querySelectorAll('.textfield')[0].placeholder = dictionary[dictionary.lang].signUpProfileName;
    this.element.querySelectorAll('.textfield')[1].placeholder = dictionary[dictionary.lang].signUpEmail;
    this.element.querySelectorAll('.textfield')[2].placeholder = dictionary[dictionary.lang].signUpPassword;
    this.element.querySelectorAll('.textfield')[3].placeholder = dictionary[dictionary.lang].signUpRepeatPassword;
  }

  async submitForm(event) {
    event.preventDefault();
    const data = {
      email: this.element.querySelectorAll('.textfield')[1].value,
      password: this.element.querySelectorAll('.textfield')[2].value
    };
    const response = await axios({
      method: 'post',
      // url: 'http://localhost:3000/api/auth/register',
      url: 'https://webpack-generator-be.herokuapp.com/api/auth/register',
      data
    });
    login(response.data.token);
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
