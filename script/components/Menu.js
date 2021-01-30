import MenuBorderAnimation from '../animations/MenuBorderAnimation';
import QuestionCallStack from '../questionsModule/QuestionCallStack';
import unsetQuestionsDeeply from '../util/unsetQuestionsDeeply';
import questionArray from '../questionsModule/questionArray';
import QuestionBlock from '../questionsModule/QuestionBlock';
import Login from './Login';
import SignUp from './SignUp';
import Modal from './Modal';
import Editor from '../editorModule/Editor';
import dictionary from '../dictionary';

export default class Menu {
  constructor() {
    this.element = document.querySelector('.navbar__list');
    this.previousTarget = document.querySelector('editor');
    this.menuAnimation = new MenuBorderAnimation();
    this.lang = navigator.language.slice(0, 2);
    this.initiallize();
    this.setLangIcon();
  }

  toggleContainer(target) {
    if (target !== this.previousTarget) {
      if (this.previousTarget) {
        this.previousTarget.hide();
      }
      target.show();
      this.previousTarget = target;
    }
  }

  updateLang() {
    this.linksArray[0].querySelector('.text').textContent = dictionary[dictionary.lang].auto;
    this.linksArray[1].querySelector('.text').textContent = dictionary[dictionary.lang].editor;
    this.linksArray[3].querySelector('.text').textContent = dictionary[dictionary.lang].login;
  }

  changeLang() {
    this.updateLang();
    this.login.updateLang();
    this.questionBlock.updateLang();
    this.signUp.updateLang();
    this.editor.updateLang();
  }

  setLangIcon() {
    if (this.lang === 'ru') {
      this.linksArray[2].querySelector('.flag').src = 'https://www.countryflags.io/ru/flat/32.png';
      this.linksArray[2].querySelector('p').textContent = 'РУС';
    } else {
      this.linksArray[2].querySelector('.flag').src = 'https://www.countryflags.io/us/flat/32.png';
      this.linksArray[2].querySelector('p').textContent = 'EN';
    }
  }

  initiallize() {
    const scopeSaver = this;
    this.questionBlock = new QuestionBlock();
    this.login = new Login();
    this.signUp = new SignUp();
    this.editor = new Editor();
    this.editor.handleEvents();
    this.linksArray = this.element.querySelectorAll('.navbar__item');
    this.questionCallStack = new QuestionCallStack(this.questionBlock, questionArray, null, () => {
      const modal = new Modal('Succes', dictionary[dictionary.lang].redirecting, dictionary[dictionary.lang].redirectingText, [
        {
          text: dictionary[dictionary.lang].redirectingYes,
          succesButton: true,
          event() {
            const editorMenuLink = scopeSaver.element.querySelectorAll('.navbar__item')[1];
            scopeSaver.menuAnimation.setNewActive(editorMenuLink);
            editorMenuLink.dispatchEvent(new Event('click'));
          },
        }]);
      modal.showModal();
    });
    this.questionCallStack.exec();
    this.questionCallStack.questionArray.forEach((el) => {
      this.editor.valueMatrix.createValueMatrixItem(el);
    });
  }

  handleEvents() {
    const scopeSaver = this;
    const menuArray = [
      {
        item: scopeSaver.linksArray[0],
        event() {
          if (this.questionCallStack.questionArray[0].answer !== null) {
            const modal = new Modal('info', dictionary[dictionary.lang].newSession, dictionary[dictionary.lang].newSessionText,
              [
                {
                  text: dictionary[dictionary.lang].newSessionYes,
                  succesButton: 'true',
                  event() {
                    scopeSaver.toggleContainer(scopeSaver.questionBlock);
                  },
                },
                {
                  text: dictionary[dictionary.lang].newSessionNo,
                  event() {
                    scopeSaver.questionCallStack.currIndex = 0;
                    scopeSaver.questionCallStack.questionArray.forEach((el) => {
                      unsetQuestionsDeeply(el, scopeSaver.editor);
                    });
                    scopeSaver.questionCallStack.exec();
                    scopeSaver.toggleContainer(scopeSaver.questionBlock);
                  },
                },
              ]);
            modal.showModal();
          } else this.toggleContainer(this.questionBlock);
        },
      },
      {
        item: scopeSaver.linksArray[1],
        event() {
          this.toggleContainer(this.editor);
        },
      },
      {
        item: scopeSaver.linksArray[2],
        event() {
          if (this.lang === 'ru') {
            this.lang = 'en';
          } else {
            this.lang = 'ru';
          }
          dictionary.lang = this.lang;
          this.setLangIcon();
          this.changeLang(this.lang);
        },
      },
      {
        item: scopeSaver.linksArray[3],
        event() {
          this.toggleContainer(this.login);
        },
      },
      {
        item: document.querySelector('.login_sign-up-link'),
        event() {
          this.toggleContainer(this.signUp);
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
    this.previousTarget = this.questionBlock;
    this.changeLang(this.lang);
  }
}
