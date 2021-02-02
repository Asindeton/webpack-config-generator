import JSZip from 'jszip';
import FileSaver from 'file-saver';

// const fileDownload = require('js-file-download');

export default function createDownloadZip(webpackConfig, npmRun, npmDRun) {
  // const zip = new JSZip();
  // zip.file('webpack.config.js', webpackConfig);
  // zip.file('npmRunDependencies.js', npmRun);
  // zip.file('npmRunDevDependencies.js', npmDRun);
  // const test = zip.generateAsync({ type: 'blob' }).then((content) => {
  //   console.log(content);
  //   // debugger;
  //   // fileDownload(content, 'webpack.config.zip');
  //   saveAs(content, 'webpack.config.zip');
  // });
  // zip.generateAsync({ type: 'blob' }).then((content) => {
  //   console.log('created');
  //   FileSaver.saveAs(content, 'download.zip');
  // });
  // const test = await zip.generateAsync({
  //   type: 'base64',
  // });
  // console.log(test);
}
