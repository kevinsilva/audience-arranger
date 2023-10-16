import {
  getElementById,
  updateStateNames,
  loadFromLocalStorage
} from './utils.js';

function fillAudience (audienceElement, namesArray) {
  for (const [index, name] of namesArray.entries()) {
    const nameElement = document.createElement('div');

    nameElement.textContent = name;
    nameElement.setAttribute('draggable', true);
    nameElement.setAttribute('data-index', index);
    audienceElement.appendChild(nameElement);
  }
}
function fillEmptyBlocks (audienceElement, columns) {
  const audienceLength = audienceElement.children.length;

  if (audienceLength % columns !== 0) {
    const numberOfEmptyBlocks = columns - (audienceLength % columns);

    for (let i = 0; i < numberOfEmptyBlocks; i++) {
      const emptyBlock = document.createElement('div');
      emptyBlock.textContent = '';
      emptyBlock.setAttribute('draggable', true);
      emptyBlock.setAttribute('data-index', audienceLength + i);
      audienceElement.appendChild(emptyBlock);
    }
  }
}

function renderAudience (audienceElement, namesArray, numberOfColumns) {
  audienceElement.innerHTML = '';
  fillAudience(audienceElement, namesArray);
  fillEmptyBlocks(audienceElement, numberOfColumns);
}

function setupAudience (state) {
  const audience = getElementById(state.audience.id);
  loadFromLocalStorage(state);
  renderAudience(audience, state.names, state.audience.numberOfColumns);
  updateStateNames(state);
  return audience;
}

export { setupAudience };
