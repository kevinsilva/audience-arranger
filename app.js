import { setupAudience } from './src/audience.js';
import { addEventListeners } from './src/drag-drop.js';

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
    'Sara'
  ],
  audience: {
    id: 'audience',
    numberOfColumns: 5
  },
  handlers: {
    drag: {
      element: null,
      index: null
    },
    drop: {
      element: null,
      index: null
    }
  },
  fileInputID: 'file-input',
  fileOutputID: 'file-output'
};

function init (state) {
  const audienceElement = setupAudience(state);
  addEventListeners(audienceElement, state);
}

init(STATE);
