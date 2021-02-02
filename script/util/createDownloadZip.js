import { saveAs } from 'file-saver';

export default async function createDownloadZip(webpackConfig, npmRun, npmDRun) {
    let zip = new JSZip();
    zip.file('webpack.config.js', webpackConfig);
    zip.file('npmRunDependencies.js', npmRun);
    zip.file('npmRunDevDependencies.js', npmDRun);
    await zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, 'webpack.config.zip');
    });
}