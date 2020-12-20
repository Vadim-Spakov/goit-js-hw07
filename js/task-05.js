const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.target.value) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = 'незнакомец';
  }
}