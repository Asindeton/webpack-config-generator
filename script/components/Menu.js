import MenuBorderAnimation from '../animations/MenuBorderAnimation';
import QuestionCallStack from '../questionsModule/questionCallStack';
import unsetQuestionsDeeply from '../util/unsetQuestionsDeeply';
import Login from './Login';
import SignUp from './signUp';
import Modal from './Modal';
import Editor from './editor';

export default class Menu {
  constructor() {
    this.element = document.querySelector('.navbar__list');
    this.previousTarget = document.querySelector('editor');
    this.menuAnimation = new MenuBorderAnimation();
  }

  toggleContainer(target) {
    if (this.previousTarget) {
      this.previousTarget.hide();
    }
    target.show();
    this.previousTarget = target;
  }

  handleEvents() {
    const login = new Login();
    const signUp = new SignUp();
    const editor = new Editor();
    const questionCallStack = new QuestionCallStack();
    questionCallStack.exec();
    const linksArray = this.element.querySelectorAll('.navbar__item');
    const menuArray = [
      {
        item: linksArray[0],
        event() {
          if (questionCallStack.questionArray[0].answer !== null) {
            this.toggleContainer(questionCallStack.questionBlock);
            const modal = new Modal('info', 'New Session', 'You already have started a auto session, would you like to continue or to start a new one',
              [
                {
                  text: 'Continue',
                  succesButton: 'true',
                  event() {},
                },
                {
                  text: 'New Session',
                  event() {
                    questionCallStack.currIndex = 0;
                    questionCallStack.questionArray.forEach((el) => {
                      console.log(unsetQuestionsDeeply);
                      unsetQuestionsDeeply(el);
                    });
                    questionCallStack.exec();
                  },
                },
              ]);
            modal.showModal();
          } else this.toggleContainer(questionCallStack.questionBlock);
        },
      },
      {
        item: linksArray[1],
        event() {
          this.toggleContainer(editor);
        },
      },
      // {
      //   item: linksArray[2],
      // onClickEvent: dictionary.changeLang(),
      // },
      {
        item: linksArray[3],
        event() {
          this.toggleContainer(login);
        },
      },
      {
        item: document.querySelector('.login_sign-up-link'),
        event() {
          this.toggleContainer(signUp);
        },
      },
    ];
    menuArray.forEach((el) => {
      el.item.addEventListener('click', () => {
        el.event.call(this);
        this.menuAnimation.setNewActive(el.item);
      });
    });
    menuArray[0].item.dispatchEvent(new Event('click'));
    this.previousTarget = questionCallStack.questionBlock;
  }
}
