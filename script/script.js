import '../style/style.scss';
import '../style/dark.scss';
import BackgroundAnimator from './animations/backgroundAnimation';

const bgAnimator = new BackgroundAnimator(document.querySelector('.bg-animation'), 0.7, 2);
