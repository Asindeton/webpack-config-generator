export default class MenuBorderAnimation {
  constructor() {
    this.element = document.querySelector('.navbar__border');
    this.linksContainer = document.querySelector('.navbar__list');
    this.activeLink = this.linksContainer.querySelector('.navbar__item_active');
    this.handleEvents();
    this.setPosition(this.activeLink);
  }

  setPosition(element) {
    this.element.style.left = `${element.offsetLeft}px`;
    this.element.style.width = `${element.offsetWidth}px`;
  }

  setNewActive(element) {
    if (element.classList.contains('navbar__item')) {
      this.activeLink.classList.remove('navbar__item_active');
      this.activeLink = element;
      this.activeLink.classList.add('navbar__item_active');
      this.linksContainer.dispatchEvent(new Event('mouseleave'));
    }
  }

  handleEvents() {
    this.linksContainer.addEventListener('mouseover', (e) => {
      if (e.target.closest('.navbar__item')) {
        this.setPosition(e.target.closest('.navbar__item'));
      }
    });
    this.linksContainer.addEventListener('mouseleave', () => {
      this.setPosition(this.activeLink);
    });
    window.addEventListener('resize', () => {
      this.setPosition(this.activeLink);
    });
  }
}
