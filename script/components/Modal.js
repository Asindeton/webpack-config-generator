import createElement from '../util/create';

export default class Modal {
  constructor(style, title, text, buttons) {
    this.style = style.toLowerCase();
    this.title = title;
    this.text = text;
    this.buttons = buttons;
    this.wrapperContainer = document.querySelector('.modal-wrapper');
    this.icon = this.getIcon();
  }

  getIcon() {
    switch (this.style) {
      case 'error': return 'fa-exclamation';
      case 'info': return 'fa-question';
      case 'succes': return 'fa-check';
      default: return null;
    }
  }

  getButtons() {
    const buttonsEl = [];
    if (this.buttons) {
      this.buttons.forEach((el) => {
        const buttonEl = document.createElement('button');
        buttonEl.classList.add('input', 'modal__button', `${el.succesButton ? 'button_agree' : 'button_disagree'}`);
        buttonEl.innerHTML = el.text;
        buttonEl.addEventListener('click', () => {
          this.closeButton.dispatchEvent(new Event('click'));
          if (el.event) {
            el.event();
          }
        });
        buttonsEl.push(buttonEl);
      });
    }
    return buttonsEl;
  }

  showModal() {
    this.createModal();
    this.wrapperContainer.classList.remove('hide');
    this.wrapperContainer.querySelector('.modal-container').append(this.element);
  }

  closeModal() {
    this.element.remove();
    this.wrapperContainer.classList.add('hide');
  }

  createModal() {
    const titleEl = document.createElement('h3');
    titleEl.classList.add('modal__title', 'text');
    titleEl.innerHTML = this.title;
    const text = document.createElement('p');
    text.classList.add('modal__text', 'text');
    text.innerHTML = this.text;
    this.closeButton = createElement('button', 'modal__close fas fa-times', null, null);
    this.closeButton.addEventListener('click', () => this.closeModal());
    this.element = createElement('div', 'modal', [
      createElement('div', `modal__heading modal__heading_${this.style}`, [
        createElement('div', `icon modal__icon fas ${this.icon}`, null, null),
        titleEl,
        this.closeButton,
      ]),
      text,
      createElement('div', 'modal__controls', [
        ...this.getButtons(),
      ], null),
    ]);
  }
}
