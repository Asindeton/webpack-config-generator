import deleteEventListener from '../util/deleteEventListener';
import Modal from '../components/Modal';
import StatusBar from '../components/statusBar';
import Editor from '../editorModule/editor';
import dictionary from '../dictionary';

export default class questionBlock {
  constructor() {
    this.wrapper = document.querySelector('.question');
    this.title = this.wrapper.querySelector('.title');
    this.text = this.wrapper.querySelector('.text');
    this.acceptButton = this.wrapper.querySelector('.button_agree');
    this.rejectButton = this.wrapper.querySelector('.button_disagree');
    this.input = this.wrapper.querySelector('.textfield');
    this.previousButton = this.wrapper.querySelector('.previous');
    this.nextButton = this.wrapper.querySelector('.next');
    this.statusBar = new StatusBar();
    this.editor = new Editor();
  }

  show() {
    this.wrapper.classList.remove('hide');
    this.statusBar.update();
    this.statusBar.show();
  }

  hide() {
    this.wrapper.classList.add('hide');
    this.statusBar.hide();
  }

  clearPreviousQuestionEvents() {
    this.acceptButton = deleteEventListener(this.acceptButton);
    this.rejectButton = deleteEventListener(this.rejectButton);
    this.nextButton = deleteEventListener(this.nextButton);
    this.previousButton = deleteEventListener(this.previousButton);
  }

  updateLang() {
    this.title.textContent = this.question.title || (this.question.sendingValue[0].toUpperCase()
      + this.question.sendingValue.slice(1));
    this.text.textContent = dictionary[dictionary.lang][this.question.sendingValue];
    this.rejectButton.textContent = dictionary[dictionary.lang].noButton;
    this.acceptButton.textContent = dictionary[dictionary.lang].yesButton;
    if (this.question.requireInput) {
      this.acceptButton.textContent = dictionary[dictionary.lang].submitButton;
      this.rejectButton.textContent = dictionary[dictionary.lang].skipButton;
      this.input.placeholder = this.question.placeholder;
    }
  }

  createQuestion(question, previousQuestionAnswer, nextQuestion, previousQuestion) {
    this.clearPreviousQuestionEvents();
    this.question = question;
    this.updateLang();
    this.nextQuestion = nextQuestion;
    this.previousQuestion = previousQuestion;
    if (question.requireInput) this.input.classList.remove('hide');
    else this.input.classList.add('hide');
    if (nextQuestion && question.answer) {
      this.nextButton.removeAttribute('disabled');
      this.nextButton.addEventListener('click', () => {
        nextQuestion();
      });
    } else this.nextButton.setAttribute('disabled', 'disabled');
    if (previousQuestion && previousQuestionAnswer) {
      this.previousButton.removeAttribute('disabled');
      this.previousButton.addEventListener('click', () => {
        previousQuestion();
      });
    } else this.previousButton.setAttribute('disabled', 'disabled');
    this.handleSubmit(this.acceptButton, true,
      question.requireInput, question.title, question.answer);
    this.handleSubmit(this.rejectButton, false,
      question.requireInput, question.title, question.answer);
  }

  sumbitEvent(value) {
    this.question.answer = value;
    this.editor.valueMatrix.setValue(this.question.sendingValue, value, this.question.requireInput);
    this.statusBar.update();
    if (this.nextQuestion) this.nextQuestion();
  }

  // eslint-disable-next-line class-methods-use-this
  checkInputHasValue(name, input) {
    let { value } = input;
    if (value === '') {
      const scopeSaver = this;
      const modal = new Modal('error', dictionary[dictionary.lang].emptyInput, dictionary[dictionary.lang].emptyInputText, [
        {
          text: dictionary[dictionary.lang].emptyInputYes,
          event() {
            value = input.placeholder;
            scopeSaver.sumbitEvent(value);
          },
          succesButton: true,
        },
        {
          text: dictionary[dictionary.lang].emptyInputNo,
        },
      ]);
      modal.showModal();
    } else {
      this.sumbitEvent(value);
    }
  }

  checkIsAnswered(isAccept, requireInput, input, name, answer, buttonValue) {
    if (answer !== null && answer !== buttonValue) {
      const scopeSaver = this;
      const modal = new Modal('info', dictionary[dictionary.lang].overwriting, dictionary[dictionary.lang].overwritingText, [
        {
          text: dictionary[dictionary.lang].overwritingYes,
          event() {
            scopeSaver.checkIsInput(isAccept, requireInput, input, name, answer, buttonValue);
          },
          succesButton: true,
        },
        {
          text: dictionary[dictionary.lang].overwritingNo,
        },
      ]);
      modal.showModal();
    } else {
      this.checkIsInput(isAccept, requireInput, input, name, answer, buttonValue);
    }
  }

  checkIsInput(isAccept, requireInput, input, name, answer, buttonValue) {
    if (/* isAccept && */ requireInput) {
      this.checkInputHasValue(name, input);
    } else {
      this.sumbitEvent(buttonValue);
    }
  }

  handleSubmit(element, isAccept, requireInput, name, answer) {
    const { input } = this;
    element.addEventListener('click', () => {
      this.checkIsAnswered(isAccept, requireInput, input, name, answer, element.getAttribute('value'));
    });
  }
}
