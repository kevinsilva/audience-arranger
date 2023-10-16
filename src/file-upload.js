import { saveToLocalStorage } from './utils.js';
import { setupAudience } from './audience.js';

function onFileUpload (file, state) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const content = event.target.result;
    const clearedContent = content.replace(/[\r\n]/g, '');
    state.names = clearedContent.split('- ').slice(1);

    saveToLocalStorage(state);
    setupAudience(state);
  };

  reader.readAsText(file);
}

function addFileUploadListener (fileInputElement, state) {
  fileInputElement.addEventListener('change', function (event) {
    onFileUpload(event.target.files[0], state);
  });
}

export { addFileUploadListener };
