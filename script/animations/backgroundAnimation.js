export default class BackgroundAnimator {
  constructor(element, amountPerSec, style) {
    this.background = element;
    this.setAmount(amountPerSec);
    this.fps = 90;
    this.opacityChangeAmount = 1;
    this.speedMultiplier = 2.5;
    this.style = style;
    this.lifetimeMultiplier = 2500;
    this.randomizeElProp();
    this.createElementRecursively();
  }

  setAmount(amountPerSec) {
    this.generationRate = 1000 / amountPerSec;
  }

  randomizeElProp() {
    this.elSize = Math.random() * 150 + 10;
    this.blur = Math.sqrt(this.elSize) / 10;
    this.elLifetime =
      Math.random() * 2000 + this.lifetimeMultiplier * Math.cbrt(this.elSize);
    if (this.style === 1) this.elSize /= 3.5;
    this.distanceX = Math.random() * 100;
    this.speed = (Math.random() * 1.5 + 0.5) * this.speedMultiplier;
  }

  createElementRecursively() {
    const elem = document.createElement("div");
    elem.classList.add("bg-animation__el");
    elem.style.width = `${this.elSize}px`;
    elem.style.height = `${this.elSize}px`;
    elem.style.left = `${Math.trunc(this.distanceX)}%`;
    if (this.style === 1) {
      elem.style.boxShadow = `0px 0px 0px ${
        this.elSize / 2.5
      }px rgb(141, 214, 249), 0px 0px 0px ${this.elSize / 1.5}px white`;
    } else if (this.style === 2) {
      elem.style.filter = `blur(${this.blur}px)`;
      elem.style.opacity = `${1 - this.blur * this.opacityChangeAmount + 0.2}`;
    }
    this.background.append(elem);
    const framesSum = (this.elLifetime / 1000) * this.fps;
    const frameLength = 1000 / this.fps;
    const animationStepDistance = this.speed / this.fps;
    const elSpeed = this.speed;
    let curStep = 0;
    function animateEl() {
      curStep += 1;
      elem.style.top = `${100 - animationStepDistance * curStep}%`;
      if (curStep < framesSum) {
        setTimeout(() => {
          requestAnimationFrame(animateEl);
        }, frameLength);
      }
    }
    requestAnimationFrame(animateEl);
    setTimeout(() => {
      this.randomizeElProp();
      this.createElementRecursively();
    }, this.generationRate);
    setTimeout(() => {
      elem.style.opacity = "0";
    }, this.elLifetime - 500);
    setTimeout(() => {
      elem.remove();
    }, this.elLifetime);
  }
}
