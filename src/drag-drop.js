import {
  getElementById,
  updateStateNames,
  saveToLocalStorage
} from './utils.js';
import { addFileDownloadListener } from './file-download.js';
import { addFileUploadListener } from './file-upload.js';

function updateStateHandle (event, handleElement) {
  handleElement.element = event.target;
  handleElement.index = event.target.dataset.index;
}

function onDrag (event, state) {
  event.target.classList.add('dragged');
  updateStateHandle(event, state.handlers.drag);
}

function addDragStartListener (audienceElement, state) {
  audienceElement.addEventListener('dragstart', (event) => {
    onDrag(event, state);
  });
}

function addDragOverListener (audienceElement) {
  audienceElement.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
}

function onDrop (event, audienceElement, state) {
  const handleDrag = state.handlers.drag;
  const handleDrop = state.handlers.drop;
  updateStateHandle(event, handleDrop);
  const savedDragNextSibling = handleDrag.element.nextSibling;

  audienceElement.insertBefore(
    handleDrag.element,
    handleDrop.element.nextSibling
  );
  audienceElement.insertBefore(handleDrop.element, savedDragNextSibling);

  handleDrag.element.dataset.index = handleDrop.index;
  handleDrop.element.dataset.index = handleDrag.index;
  updateStateNames(state);
  saveToLocalStorage(state);
}

function addDropListener (audienceElement, state) {
  audienceElement.addEventListener('drop', (event) => {
    onDrop(event, audienceElement, state);
  });
}

function onDragEnd (event) {
  event.target.classList.remove('dragged');
}

function addDragEndListener (audienceElement) {
  audienceElement.addEventListener('dragend', onDragEnd);
}

function addEventListeners (audienceElement, state) {
  addDragStartListener(audienceElement, state);
  addDragOverListener(audienceElement);
  addDropListener(audienceElement, state);
  addDragEndListener(audienceElement, state);
  addFileUploadListener(getElementById(state.fileInputID), state);
  addFileDownloadListener(getElementById(state.fileOutputID), state);
}

export { addEventListeners };
