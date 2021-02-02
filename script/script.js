import '../style/style.scss';
import '../style/dark.scss';
import FloatingCanvasBackground from './animations/FloatingCanvasBackground';
import Menu from './components/Menu';

const bgAnimator = new FloatingCanvasBackground(document.querySelector('.animated-bg'), 0.5);
bgAnimator.drawParticles();
const menu = new Menu();
menu.handleEvents();
