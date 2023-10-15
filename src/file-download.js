function onFileDownload(state) {
  let content = '# Audience\n\n';

  state.names.forEach((name) => {
    content += `- ${name}\n`;
  });

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8,' });
  const objUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.setAttribute('href', objUrl);
  link.setAttribute('download', 'audience.txt');
  link.click();
  document.querySelector('body').append(link);
}

function addFileDownloadListener(fileOutputElement, state) {
  fileOutputElement.addEventListener('click', function () {
    onFileDownload(state);
  });
}

export { addFileDownloadListener };
