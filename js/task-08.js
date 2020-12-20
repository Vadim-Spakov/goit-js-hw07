const inputEl = document.querySelector('#controls>input');

const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

const renderDiv = document.querySelector('#boxes');

const divs = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const createBoxes = function (amount) {
  const divs = [];
  renderDiv.innerHTML = '';

  if (amount > 0) {
    for (let i = 1; i <= amount; i += 1) {
      const element = document.createElement('div');
      element.style.width = String(20 + i * 10) + 'px';
      element.style.height = String(20 + i * 10) + 'px';
      element.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(
        255,
      )},${getRandomInt(255)})`;

      divs.push(element);
    }

    renderDiv.append(...divs);
  }
};

renderBtn.addEventListener('click', () => createBoxes(inputEl.value));

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  renderDiv.innerHTML = '';
  inputEl.value = '';
}