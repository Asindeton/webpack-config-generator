import axios from 'axios';
import dictionary from '../dictionary';
import { login, userName } from './Auth';
import parseFormData from '../util/parseFormData';

export default class SignUp {
  constructor() {
    this.element = document.querySelector('.sign-up');
    this.message = this.element.querySelector('.incorrect');
    this.waiter = this.element.querySelector('.waiter');
    this.form = this.element.querySelector('.sign-up__form');
    this.updateLang();
    this.element.querySelector('.button_agree').addEventListener('click', this.submitForm.bind(this));
  }

  clearTextfields() {
    this.form.querySelectorAll('.textfield').forEach((el) => {
      el.value = '';
    });
  }

  updateLang() {
    this.element.querySelector('.title').textContent = dictionary[dictionary.lang].signUp;
    this.element.querySelector('.button').textContent = dictionary[dictionary.lang].signUpButton;
    this.element.querySelectorAll('.textfield')[0].placeholder = dictionary[dictionary.lang].signUpProfileName;
    this.element.querySelectorAll('.textfield')[1].placeholder = dictionary[dictionary.lang].signUpEmail;
    this.element.querySelectorAll('.textfield')[2].placeholder = dictionary[dictionary.lang].signUpPassword;
    this.element.querySelectorAll('.textfield')[3].placeholder = dictionary[dictionary.lang].signUpRepeatPassword;
  }

  async submitForm(event) {
    this.hideMessage();
    event.preventDefault();
    const data = parseFormData(new FormData(this.form));
    if (data.password === data.repeatedPassword) {
      if (data.email && data.password && data.name) {
        try {
          this.showWaiter();
          const response = await axios({
            method: 'post',
            // url: 'http://localhost:3000/api/auth/register',
            url: 'https://webpack-generator-be.herokuapp.com/api/auth/register',
            data,
          });
          login(response.data.token, response.data.userId, response.data.name);
          this.hide();
          document.querySelectorAll('.navbar__item')[3].querySelector('.navbar__link').textContent = userName();
          document.querySelectorAll('.navbar__item')[3].dispatchEvent(new Event('click'));
        } catch (e) {
          let error = e.response.data.messageCode || e.response.data.message;
          if (e.response.data.errors) error = e.response.data.errors[0].param;
          this.showMessage(error);
        } finally {
          this.hideWaiter();
        }
      } else {
        this.showMessage('fillData');
      }
    } else {
      this.showMessage('repeatingPasswordIncorrect');
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
