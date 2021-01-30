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
      // eslint-disable-next-line no-param-reassign
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
    console.log(data);
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
        this.showMessage(e);
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
