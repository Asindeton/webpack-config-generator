import '../style/style.scss';
import '../style/dark.scss';
import CanvasBgAnimation from './animations/FloatingCanvasBackground';
import Menu from './components/Menu';

const bgAnimator = new CanvasBgAnimation(document.querySelector('.animated-bg'), 0.5);
bgAnimator.drawParticles();
const menu = new Menu();
menu.handleEvents();
