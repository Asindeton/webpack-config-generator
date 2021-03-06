import axios from 'axios';
import dictionary from '../dictionary';
import DownloadButton from './DownloadButton';
import createDownloadZip from '../util/createDownloadZip';
import Modal from './Modal';
import { logout, userName, token } from './Auth';

export default class Profile {
  constructor() {
    this.element = document.querySelector('.profile');
    this.loggedText = this.element.querySelector('.profile__text');
    this.latestCreatedText = this.element.querySelector('.profile__latest');
    this.profileName = this.element.querySelector('.profile__name');
    this.unauthorize = this.element.querySelector('.unauthorize');
    this.downloadButton = new DownloadButton(null);
    this.downloadButton.disabled = false;
    this.latestCreatedText.after(this.downloadButton.wrapper);
    this.updateLang();
    this.handleUnauthorize();
    this.downloadButton.wrapper.addEventListener('click', async () => {
      try {
        const response = await axios({
          method: 'get',
          // url: 'http://localhost:3000/api/config/last',
          url: 'https://webpack-generator-be.herokuapp.com/api/config/last',
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        });
        if (response.data) {
          createDownloadZip(response.data.webpackConfig,
            response.data.npmRun, response.data.npmDRun);
        }
        this.downloadButton.disabled = false;
        this.downloadButton.wrapper.classList.remove('download-button__disabled');
      } catch (e) {
        if (!this.downloadButton.disabled) {
          const modal = new Modal('error', dictionary[dictionary.lang].emptyConfigTitle, dictionary[dictionary.lang].emptyConfigText, [
            {
              text: 'Ok',
              succesButton: 'true',
            },
          ]);
          modal.showModal();
        }
        this.downloadButton.disabled = true;
        this.downloadButton.wrapper.classList.add('download-button__disabled');
      }
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
    this.downloadButton.disabled = false;
    this.downloadButton.wrapper.classList.remove('download-button__disabled');
    // setDownload(getData());
    this.profileName.textContent = userName();
    this.element.classList.remove('hide');
  }

  setDownload(data) {
    this.downloadButton.setValues(data);
  }
}
