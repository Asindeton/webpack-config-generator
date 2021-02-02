const fileDownload = require('js-file-download');
import { saveAs } from 'file-saver';
import jsZip from 'jsZip';

export default function createDownloadZip(webpackConfig, npmRun, npmDRun) {
    let zip = new jsZip();
    zip.file('webpack.config.js', webpackConfig);
    zip.file('npmRunDependencies.js', npmRun);
    zip.file('npmRunDevDependencies.js', npmDRun);
    const prom = zip.generateAsync({ type: "blob" }).then(function (content) {
        debugger;
        //fileDownload(content, 'webpack.config.zip');
        saveAs(content, 'webpack.config.zip');
    });
}