import create from '../util/create';
import dictionary from '../dictionary';
import deleteEventListener from '../util/deleteEventListener';

export default class DownloadButton {
  constructor(data) {
    this.wrapper = create('button', 'button download-button input button button_agree', [
      create('i', 'icon fas fa-download download-button__icon text')]);
    this.filesizeText = create('p', 'download-button__text text');
    this.filesizeValue = create('span', 'download-button__filesize text');
    // this.creationDateText = create('p', 'download-button__text text');
    // this.creationDateValue = create('span', 'download-button__date text');
    this.updateLang();
    this.createElement();
    this.setValues(data);
  }

  createElement() {
    this.wrapper.append(this.filesizeText);
    this.filesizeText.after(this.filesizeValue);
  }

  updateLang() {
    this.filesizeText.textContent = dictionary[dictionary.lang].filesize;
    this.filesizeText.lastChild.after(this.filesizeValue);
    console.log(this.wrapper);
  }

  setValues(data, filesize) {
    if (data) {
      this.wrapper.classList.remove('download-button__disabled');
      this.disabled = false;
      this.filesizeValue.textContent = filesize;
      // this.creationDateValue.textContent = data.date;
      this.updateLang();
      this.handleDownload(data);
    } else {
      this.disabled = true;
      this.wrapper.classList.add('download-button__disabled');
    }
  }

  handleDownload(download) {
    this.wrapper = deleteEventListener(this.wrapper);
    this.wrapper.addEventListener('click', () => {
      download();
    });
  }
}
