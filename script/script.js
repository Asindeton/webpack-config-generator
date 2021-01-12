import '../style/style.scss';
import '../style/dark.scss';
import CanvasBgAnimation from './animations/floatingCanvasBackground';

const bgAnimator = new CanvasBgAnimation(document.querySelector('.animated-bg'), 0.5);
bgAnimator.drawParticles();
