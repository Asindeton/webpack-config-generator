import axios from 'axios';
import ValueMatrix from './ValueMatrix';
import dictionary from '../dictionary';
import Modal from '../components/Modal';

import createDownloadZip from '../util/createDownloadZip';
import DownloadForm from '../components/DownloadForm';

export default class Editor {
  constructor() {
    this.element = document.querySelector('.editor');
    this.waiter = this.element.querySelector('.waiter');
    this.valueMatrix = new ValueMatrix();
    this.downloadForm = new DownloadForm();
    this.updateLang();
  }

  updateLang() {
    this.element.querySelector('.editor__generate').textContent = dictionary[dictionary.lang].editorGenerate;
    this.element.querySelector('.title').textContent = dictionary[dictionary.lang].editor;
    this.downloadForm.updateLang();
  }

  handleEvents() {
    this.element.querySelector('.editor__generate').addEventListener('click', async () => {
      let response = null;
      const data = this.valueMatrix.getValues();
      try {
        this.showWaiter();
        response = await axios({
          method: 'post',
          // url: 'http://localhost:3000/api/config/generate',
          url: 'https://webpack-generator-be.herokuapp.com/api/config/generate',
          data,
        });
        createDownloadZip(response.data.webpackConfig, response.data.npmRun, response.data.npmDRun);
        this.showDownload();
        this.downloadForm.set(response.data.npmRun, response.data.npmDRun);
      } catch (e) {
        const modal = new Modal('error', 'Error', e.response.data.massageCode, [
          {
            text: 'Ok',
            succesButton: true,
          },
        ]);
        modal.showModal();
      } finally {
        this.hideWaiter();
      }
    });
  }

  hide() {
    this.element.classList.add('hide');
  }

  show() {
    this.element.classList.remove('hide');
  }

  showDownload() {
    this.downloadForm.show();
    this.hide();
  }

  showWaiter() {
    this.waiter.classList.remove('hide');
  }

  hideWaiter() {
    this.waiter.classList.add('hide');
  }
}
