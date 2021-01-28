import questionArray from '../questionsModule/questionArray';

export default class statusBar {
  constructor() {
    this.element = document.querySelector('.status__bar');
    this.sumOfElements = 0;
    this.currentElement = 0;
  }

  update() {
    this.sumOfElements = 0;
    this.currentElement = 0;
    questionArray.forEach((el) => {
      this.getSumOfElements(el);
      this.getAskedQuestionAmount(el);
    });
    this.element.style.width = `${(this.currentElement / this.sumOfElements) * 100}%`;
  }

  getSumOfElements(question) {
    this.sumOfElements += 1;
    if (question.child) {
      question.child.forEach((el) => {
        if (el.answer) this.getSumOfElements(el);
      });
    }
  }

  hide() {
    this.element.classList.add('hide');
  }

  show() {
    this.element.classList.remove('hide');
  }

  getAskedQuestionAmount(question) {
    if (question.answer) {
      this.currentElement += 1;
      if (question.child) {
        question.child.forEach((el) => {
          this.getAskedQuestionAmount(el);
        });
      }
    }
  }
}
