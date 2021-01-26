import '../style/style.scss';
import '../style/dark.scss';
import CanvasBgAnimation from './animations/FloatingCanvasBackground';
import Menu from './components/Menu';
import QuestionCallStack from './questionsModule/questionCallStack';

const bgAnimator = new CanvasBgAnimation(document.querySelector('.animated-bg'), 0.5);
bgAnimator.drawParticles();
const menu = new Menu();
menu.handleEvents();


// const modal = new Modal('info', 'A butterfly did a fly', 'Ok, whats goin wrong', [
//   {
//     text: 'Yes',
//     event() { alert('sause')},
//     succesButton: true,
//   },
//   {
//     text: 'No',
//     event() { alert('sausage')},
//   },
// ]);



// let questionArray = [
//   {
//     title: 'HTMLWebpackPlugin',
//     question: 'Ваше приложение использует подготовленную заранее верстку(html файл)?',
//     requireInput: false, // true/false
//     answer: null, /* будет меняться на значение введеное пользователем,
//     true/false если requireInput false и введеное зачение/false если requireInput true */
//     child: [ // дочерние вопросы
//       {
//         title: 'smth',
//         question: 'smth',
//         requireInput: true,
//         answer: null,
//         // child: etc ;
//         // дочерние вопросы дочерних вопросов
//         // так же использовать для выбора одного вопроса из
//         // пример - sass/less/stylus. дочерние вопросы
//         // вызываются рекурсивно до тех пор пока ответ на
//         // вопрос положителен
//       },
//       {
//         // вопросы следующие друг за другом выполняются
//         // независмо от ответа на предыдущий вопрос
//         title: 'smth',
//         question: 'smth',
//         requireInput: true,
//         answer: null,
//         // child: etc
//       },
//     ],
//   },
//   {
//     title: 'SCSS',
//     question: 'Планируете ли вы использовать SCSS?',
//     requireInput: false,
//     answer: null,
//   },
// ];
