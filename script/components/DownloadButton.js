import create from '../util/create';
import dictionary from '../dictionary';
import deleteEventListener from '../util/deleteEventListener';

export default class DownloadButton {
  constructor(data) {
    this.createElement();
    this.updateLang();
    this.setValues(data);
  }

  createElement(filesize) {
    this.wrapper = create('button', 'button download-button input button button_agree', [
      create('i', 'icon fas fa-download download-button__icon text')]);
    this.filesizeText = create('p', 'download-button__text text');
    this.filesizeValue = create('span', 'download-button__filesize text');
    this.filesizeValue.textContent = filesize;
    this.filesizeText.after(this.filesizeValue);
    if (filesize) this.wrapper.append(this.filesizeText);
  }

  updateLang() {
    this.filesizeText.textContent = dictionary[dictionary.lang].filesize;
    this.filesizeText.lastChild.after(this.filesizeValue);
  }

  setValues(data, filesize) {
    if (data) {
      this.wrapper.classList.remove('download-button__disabled');
      this.disabled = false;
      // this.creationDateValue.textContent = data.date;
      this.createElement(filesize);
      this.updateLang();
      this.handleDownload(data);
    } else {
      this.disabled = true;
      this.wrapper.classList.add('download-button__disabled');
    }
  }

  handleDownload(download) {
    if (this.wrapper.parentNode) this.wrapper = deleteEventListener(this.wrapper);
    this.wrapper.addEventListener('click', () => {
      download();
    });
  }
}
