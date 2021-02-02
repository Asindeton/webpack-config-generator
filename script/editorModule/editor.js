import axios from 'axios';
import ValueMatrix from './ValueMatrix';
import dictionary from '../dictionary';
import Modal from '../components/Modal';
import memorySizeOf from '../util/getSizeOf';
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
        this.showDownload(response.data.npmRun, response.data.npmDRun, createDownloadZip.bind(
          this, response.data.webpackConfig, response.data.npmRun, response.data.npmDRun,
        ), memorySizeOf(response.data));
        // eslint-disable-next-line no-undef
      } catch (e) {
        console.log(e);
        const modal = new Modal('error', 'Error', e.response.data.messageCode, [
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

  showDownload(npm, npmDev, ...data) {
    this.downloadForm.show(npm, npmDev, ...data);
    this.hide();
  }

  showWaiter() {
    this.waiter.classList.remove('hide');
  }

  hideWaiter() {
    this.waiter.classList.add('hide');
  }
}
