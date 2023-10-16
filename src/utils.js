function getElementById (id) {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Element with id: ${id} was not found`);
  return element;
}

function updateStateNames (state) {
  const nameElements = document.querySelectorAll('[data-index]');
  state.names = Array.from(nameElements).map(
    (nameElement) => nameElement.textContent
  );
}

function saveToLocalStorage (state) {
  localStorage.setItem('audience', JSON.stringify(state.names));
}

function loadFromLocalStorage (state) {
  const audience = localStorage.getItem('audience');
  if (audience) state.names = JSON.parse(audience);
}

export {
  getElementById,
  updateStateNames,
  saveToLocalStorage,
  loadFromLocalStorage
};
