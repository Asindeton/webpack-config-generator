import axios from 'axios';
import ValueMatrix from './ValueMatrix';
import dictionary from '../dictionary';
import DownloadButton from '../components/DownloadButton';

export default class Editor {
  constructor() {
    this.element = document.querySelector('.editor');
    this.waiter = this.element.querySelector('.waiter');
    this.downloadForm = this.element.querySelector('.editor__download');
    this.downloadButton = new DownloadButton();
    this.valueMatrix = new ValueMatrix();
    this.updateLang();
  }

  updateLang() {
    this.element.querySelector('.editor__generate').textContent = dictionary[dictionary.lang].editorGenerate;
    this.element.querySelector('.title').textContent = dictionary[dictionary.lang].editor;
  }

  handleEvents() {
    this.element.querySelector('.editor__generate').addEventListener('click', async () => {
      const data = this.valueMatrix.getValues();
      try {
        this.showWaiter();
        const response = await axios({
          method: 'post',
          // url: 'http://localhost:3000/api/auth/register',
          url: 'https://webpack-generator-be.herokuapp.com//api/config/generate',
          data,
        });
        this.showDownload();
        this.downloadForm.append(this.downloadButton.createElement());
      } catch (e) {
        //
      } finally {
        this.hideWaiter();
      }
    });
  }

  hide() {
    this.hideWaiter();
    this.hideDownload();
    this.element.classList.add('hide');
  }

  show() {
    this.element.classList.remove('hide');
  }

  showWaiter() {
    this.waiter.classList.remove('hide');
  }

  hideWaiter() {
    this.waiter.classList.add('hide');
  }

  showDownload() {
    this.downloadForm.classList.remove('hide');
  }

  hideDownload() {
    this.downloadForm.innerHTML = '';
    this.downloadForm.classList.add('hide');
  }
}
