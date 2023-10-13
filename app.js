const STATE = {
  names: [
    'Ana',
    'Beatriz',
    'Florentino',
    'Guilherme',
    'João',
    'Kevin',
    'Mara',
    'Mariana',
    'Mariellyn',
    'Renato',
    'Sara',
  ],
  audience: {
    id: 'audience',
    numberOfColumns: 5,
  },
  handlers: {
    drag: {
      name: '',
      element: null,
    },
    drop: {
      name: '',
      element: null,
    },
  },
  fileInputID: 'file-input',
  fileOutputID: 'file-output',
};

// AUDIENCE

function getAudicenceElement(audienceID) {
  return document.getElementById(audienceID);
}

function fillAudience(audienceElement, namesArray) {
  for (const name of namesArray) {
    const nameElement = document.createElement('div');

    nameElement.textContent = name;
    nameElement.setAttribute('draggable', true);
    audienceElement.appendChild(nameElement);
  }
}

function fillEmptyBlocks(audienceElement, columns) {
  if (audienceElement.children.length % columns !== 0) {
    const numberOfEmptyBlocks =
      columns - (audienceElement.children.length % columns);

    for (let i = 0; i < numberOfEmptyBlocks; i++) {
      const emptyBlock = document.createElement('div');
      emptyBlock.textContent = '';
      emptyBlock.setAttribute('draggable', true);
      audienceElement.appendChild(emptyBlock);
    }
  }
}

function renderAudience(audienceElement, namesArray, numberOfColumns) {
  audienceElement.innerHTML = '';
  fillAudience(audienceElement, namesArray);
  fillEmptyBlocks(audienceElement, numberOfColumns);
}

function setupAudience(state) {
  const audience = getAudicenceElement(state.audience.id);
  renderAudience(audience, state.names, state.audience.numberOfColumns);

  return audience;
}

// EVENT LISTENERS

function onDrag(event, handleDrag) {
  handleDrag.name = event.target.textContent;
  handleDrag.element = event.target;
}

function addDragStartListener(audienceElement, handleDrag) {
  audienceElement.addEventListener('dragstart', (event) => {
    onDrag(event, handleDrag);
  });
}

function addDragOverListener(audienceElement) {
  audienceElement.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
}

function onDrop(event, handleDrag, handleDrop) {
  handleDrop.name = event.target.textContent;
  handleDrop.element = event.target;

  if (handleDrop.name === '') {
    handleDrop.element.textContent = handleDrag.name;
    handleDrag.element.textContent = '';
  } else {
    handleDrop.element.textContent = handleDrag.name;
    handleDrag.element.textContent = handleDrop.name;
  }
}

function addDropListener(audienceElement, handleDrag, handleDrop) {
  audienceElement.addEventListener('drop', (event) => {
    onDrop(event, handleDrag, handleDrop);
  });
}

function addEventListeners(audienceElement, state) {
  addDragStartListener(audienceElement, state.handlers.drag);
  addDragOverListener(audienceElement);
  addDropListener(audienceElement, state.handlers.drag, state.handlers.drop);
  addFileUploadListener(getFileUploadInput(state.fileInputID), state);
  addFileDownloadListener(getFileOutputButton(state.fileOutputID), state);
}

// FILE UPLOAD

function getFileUploadInput(inputID) {
  return document.getElementById(inputID);
}

function onFileUpload(file, state) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const content = event.target.result;
    const clearedContent = content.replace(/[\r\n]/g, '');

    state.names = clearedContent.split(',');

    setupAudience(state);
  };

  reader.readAsText(file);
}

function addFileUploadListener(fileInputElement, state) {
  fileInputElement.addEventListener('change', function (event) {
    onFileUpload(event.target.files[0], state);
  });
}

// FILE DOWNLOAD

function getFileOutputButton(buttonID) {
  return document.getElementById(buttonID);
}

function onFileDownload(state) {
  const content = state.names.join(',');
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8,' });
  const objUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.setAttribute('href', objUrl);
  link.setAttribute('download', 'audience.csv');
  link.click();
  document.querySelector('body').append(link);
}

function addFileDownloadListener(fileOutputElement, state) {
  fileOutputElement.addEventListener('click', function () {
    onFileDownload(state);
  });
}

// INIT

function init(state) {
  const audienceElement = setupAudience(state);
  addEventListeners(audienceElement, state);
}

init(STATE);
