import axios from 'axios';
import dictionary from '../dictionary';
import { login, userName } from './Auth';
import parseFormData from '../util/parseFormData';

export default class Login {
  constructor(profile) {
    this.element = document.querySelector('.login');
    this.message = this.element.querySelector('.incorrect');
    this.waiter = this.element.querySelector('.waiter');
    this.form = this.element.querySelector('.login__form');
    this.profile = profile;
    this.handleSubmit();
    this.updateLang();
    this.element.querySelector('.button_agree').addEventListener('click', this.submitForm.bind(this));
  }

  clearTextfields() {
    this.form.querySelectorAll('.textfield').forEach((el) => {
      el.value = '';
    });
  }

  updateLang() {
    this.element.querySelector('.title').textContent = dictionary[dictionary.lang].login;
    this.element.querySelector('.button').textContent = dictionary[dictionary.lang].loginButton;
    this.element.querySelectorAll('.textfield')[0].placeholder = dictionary[dictionary.lang].loginProfileName;
    this.element.querySelectorAll('.textfield')[1].placeholder = dictionary[dictionary.lang].loginPassword;
    this.element.querySelector('.login_sign-up-link').textContent = dictionary[dictionary.lang].loginToSignUp;
  }

  handleSubmit() {
    this.form.querySelector('button').addEventListener('click', (e) => { this.submitForm(e); });
  }

  async submitForm(event) {
    this.hideMessage();
    event.preventDefault();
    const data = parseFormData(new FormData(this.form));
    if (data.email && data.password) {
      try {
        this.showWaiter();
        const response = await axios({
          method: 'post',
          // url: 'http://localhost:3000/api/auth/login',
          url: 'https://webpack-generator-be.herokuapp.com/api/auth/login',
          data,
        });
        login(response.data.token, response.data.userId, response.data.name);
        this.hide();
        document.querySelectorAll('.navbar__item')[3].querySelector('.navbar__link').textContent = userName();
        document.querySelectorAll('.navbar__item')[3].dispatchEvent(new Event('click'));
      } catch (e) {
        this.showMessage(e.response.data.messageCode);
      } finally {
        this.hideWaiter();
      }
    } else {
      this.showMessage('fillData');
    }
  }

  hide() {
    this.clearTextfields();
    this.element.classList.add('hide');
  }

  show() {
    this.hideWaiter();
    this.hideMessage();
    this.element.classList.remove('hide');
  }

  showMessage(message) {
    this.message.textContent = dictionary[dictionary.lang].errors[message] || message;
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
