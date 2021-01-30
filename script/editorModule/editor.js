import ValueMatrix from './ValueMatrix';
import dictionary from '../dictionary';

export default class Editor {
  constructor() {
    this.element = document.querySelector('.editor');
    this.valueMatrix = new ValueMatrix();
    this.updateLang();
  }

  hide() {
    this.element.classList.add('hide');
  }

  show() {
    this.element.classList.remove('hide');
  }

  updateLang() {
    this.element.querySelector('.editor__generate').textContent = dictionary[dictionary.lang].editorGenerate;
    this.element.querySelector('.title').textContent = dictionary[dictionary.lang].editor;
  }

  handleEvents() {
    this.element.querySelector('.editor__generate').addEventListener('click', () => {
      this.valueMatrix.getValues();
    });
  }
}
