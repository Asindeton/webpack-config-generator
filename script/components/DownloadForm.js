import DownloadButton from './DownloadButton';
import dictionary from '../dictionary';

export default class DownloadForm {
  constructor() {
    this.element = document.querySelector('.download');
    this.downloadButton = new DownloadButton();
    this.instructionArray = this.element.querySelectorAll('.instruction__item');
    this.updateLang();
  }

  updateLang() {
    this.element.querySelector('.download__title').innerHTML = dictionary[dictionary.lang].downloadTitle;
    this.element.querySelector('.download__subtitle').textContent = dictionary[dictionary.lang].downloadSubtitle;
    this.instructionArray[0].textContent = dictionary[dictionary.lang].instructionFirst;
    this.instructionArray[3].textContent = dictionary[dictionary.lang].instructionSecond;
    this.downloadButton.updateLang();
  }

  set(npm, npmDev, ...data) {
    this.instructionArray[1].textContent = npm;
    this.instructionArray[2].textContent = npmDev;
    console.log(...data);
    this.downloadButton.setValues(...data);
  }

  show() {
    this.element.classList.remove('hide');
    this.element.append(this.downloadButton.wrapper);
  }

  hide() {
    if (this.element.querySelector('download-button')) {
      this.element.querySelector('download-button').remove();
    }
    this.element.classList.add('hide');
  }
}
