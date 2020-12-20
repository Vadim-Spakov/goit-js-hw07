const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

// console.log(inputEl.value.length);

function onInputBlur(event) {
  const inputValueLength = event.target.value.length;
  const validValueLength = parseInt(inputEl.dataset.length);

  // console.log(inputEl.dataset.length);

  if (inputValueLength === validValueLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}