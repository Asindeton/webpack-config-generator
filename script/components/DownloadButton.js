import create from '../util/create';
import dictionary from '../dictionary';

export default class DownloadButton {
  constructor(data) {
    this.wrapper = create('button', 'button download-button input button button_agree', [
      create('i', 'icon fas fa-download download-button__icon text')]);
    this.filesizeText = create('p', 'download-button__text text');
    this.filesizeValue = create('span', 'download-button__filesize text');
    this.creationDateText = create('p', 'download-button__text text');
    this.creationDateValue = create('span', 'download-button__date text');
    this.updateLang();
    if (data) {
      this.setValues(data);
    } else {
      this.disabled = true;
      this.wrapper.classList.add('download-button__disabled');
    }
  }

  createElement() {
    this.wrapper.append(this.filesizeText);
    this.filesizeText.after(this.filesizeValue);
    this.wrapper.append(this.creationDateText);
    return this.wrapper;
  }

  updateLang() {
    this.filesizeText.textContent = dictionary[dictionary.lang].filesize;
    this.filesizeText.lastChild.after(this.filesizeValue);
    this.creationDateText.textContent = dictionary[dictionary.lang].dateOfCreation;
    this.creationDateText.append(document.createElement('br'));
    this.creationDateText.lastChild.after(this.creationDateValue);
  }

  setValues(data) {
    this.wrapper.classList.remove('download-button__disabled');
    this.disabled = false;
    this.filesizeValue.textContent = data.filesize;
    this.creationDateValue.textContent = data.date;
    this.downloadLink = data.link;

    // this.handleDownload();
  }

  // handleDownload() {
  //   this.wrapper.addEventListener('click', () => {
  //     if (!this.disabled) {
  //       console.log('Do Smth');
  //     }
  //   });
  // }
}
