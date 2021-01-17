export default class MenuBorderAnimation {
  constructor(element) {
    this.element = element;
  }

  setLinksContainer(element) {
    this.linksContainer = element;
  }

  setPosition(element = this.linksContainer.querySelector('.navbar__link_active').closest('.navbar__item')) {
    this.element.style.left = `${element.offsetLeft}px`;
    this.element.style.width = `${element.offsetWidth}px`;
  }

  handleEvents() {
    this.linksContainer.addEventListener('mouseover', (e) => {
      if (e.target.closest('.navbar__item')) {
        this.setPosition(e.target.closest('.navbar__item'));
      }
    });
    this.linksContainer.addEventListener('mouseleave', () => {
      this.setPosition();
    });
    window.addEventListener('resize', () => {
      this.setPosition();
    });
  }
}
