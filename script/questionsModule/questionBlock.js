import deleteEventListener from '../util/deleteEventListener';
import Modal from '../components/Modal';
import StatusBar from '../components/statusBar';

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
  }

  show() {
    this.wrapper.classList.remove('hide');
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

  createQuestion(question, previousQuestionAnswer, nextQuestion, previousQuestion) {
    this.clearPreviousQuestionEvents();
    this.question = question;
    this.title.textContent = question.title;
    this.text.textContent = question.text;
    this.rejectButton.textContent = 'No';
    this.acceptButton.textContent = 'Yes';
    if (question.requireInput) {
      this.acceptButton.textContent = 'Submit';
      this.rejectButton.textContent = 'Skip';
      this.input.placeholder = question.placeholder;
    }
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
    if (this.question.sendingValue) {
      // console.log({
      //   [this.question.sendingValue]: value,
      // });
    }
    this.statusBar.update();
    if (this.nextQuestion) this.nextQuestion();
  }

  // eslint-disable-next-line class-methods-use-this
  checkInputHasValue(name, input) {
    let { value } = input;
    if (value === '') {
      const scopeSaver = this;
      const modal = new Modal('error', 'Empty Input', 'You are trying to send empty input, we will change it with value from placeholder', [
        {
          text: 'Ok, change it',
          event() {
            value = input.placeholder;
            scopeSaver.sumbitEvent(value);
          },
          succesButton: true,
        },
        {
          text: 'No',
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
      const modal = new Modal('info', 'Overwriting', 'You are trying to overwrite existing answer, this can change question tree, are you really want to continue?', [
        {
          text: 'Yes',
          event() {
            scopeSaver.checkIsInput(isAccept, requireInput, input, name, answer, buttonValue);
          },
          succesButton: true,
        },
        {
          text: 'No',
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
