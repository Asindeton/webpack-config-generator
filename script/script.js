import JSZip from 'jszip';
import FileSaver from 'file-saver';
import '../style/style.scss';
import '../style/dark.scss';
import FloatingCanvasBackground from './animations/FloatingCanvasBackground';
import Menu from './components/Menu';

const bgAnimator = new FloatingCanvasBackground(document.querySelector('.animated-bg'), 0.5);
bgAnimator.drawParticles();
const menu = new Menu();
menu.handleEvents();
let zip = new JSZip();
zip.file("idlist.txt", `PMID:29651880\r\nPMID:29303721`);
zip.generateAsync({type: "blob"}).then(function(content) {
  FileSaver.saveAs(content, "download.zip");
});