import '../style/style.scss';
import '../style/dark.scss';
import CanvasBgAnimation from './animations/FloatingCanvasBackground';
import MenuAnimation from './animations/MenuBorderAnimation';

const bgAnimator = new CanvasBgAnimation(document.querySelector('.animated-bg'), 0.5);
bgAnimator.drawParticles();
const menuAnimation = new MenuAnimation(document.querySelector('.navbar__border'));
menuAnimation.setLinksContainer(document.querySelector('.navbar__list'));
menuAnimation.handleEvents();
menuAnimation.setPosition();
