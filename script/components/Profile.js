import axios from 'axios';
import dictionary from '../dictionary';
import DownloadButton from './DownloadButton';
import { logout, userName, token } from './Auth';

export default class Profile {
  constructor() {
    this.element = document.querySelector('.profile');
    this.loggedText = this.element.querySelector('.profile__text');
    this.latestCreatedText = this.element.querySelector('.profile__latest');
    this.profileName = this.element.querySelector('.profile__name');
    this.unauthorize = this.element.querySelector('.unauthorize');
    this.downloadButton = new DownloadButton(null);
    this.latestCreatedText.after(this.downloadButton.wrapper);
    this.updateLang();
    this.handleUnauthorize();
    this.downloadButton.wrapper.addEventListener('click', async () => {
      const response = await axios({
        method: 'get',
        // url: 'http://localhost:3000/api/config/last',
        url: 'https://webpack-generator-be.herokuapp.com/api/config/last',
        headers: {
          Authorization: `Bearer ${token()}`
        }        
      });
      debugger;
    });
  }

  updateLang() {
    this.loggedText.textContent = dictionary[dictionary.lang].loggedText;
    this.loggedText.append(this.profileName);
    this.latestCreatedText.textContent = dictionary[dictionary.lang].latestCreatedText;
    this.unauthorize.textContent = dictionary[dictionary.lang].unauthorize;
    this.downloadButton.updateLang();
  }

  handleUnauthorize() {
    this.unauthorize.addEventListener('click', () => {
      document.querySelectorAll('.navbar__item')[3].querySelector('.navbar__link').textContent = dictionary[dictionary.lang].login;
      logout();
      document.querySelectorAll('.navbar__item')[3].dispatchEvent(new Event('click'));
    });
  }

  hide() {
    this.element.classList.add('hide');
  }

  show() {
    // setDownload(getData());
    this.profileName.textContent = userName();
    this.element.classList.remove('hide');
  }

  setDownload(data) {
    this.downloadButton.setValues(data);
  }
}
