import { saveAs } from 'file-saver';
import text from '../static.txt';

export default async function createDownloadZip(webpackConfig, npmRun, npmDRun) {
  // eslint-disable-next-line no-undef
  const zip = new JSZip();
  zip.file('webpack.config.js', webpackConfig);
  zip.file('npmRunDevDependencies.text', npmDRun);
  zip.file('Readme.txt', text);
  await zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'webpack.config.zip');
  });
}
