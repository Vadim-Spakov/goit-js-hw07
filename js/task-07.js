const resizePanelEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// inputEl.addEventListener('input', onInputChange);

// console.log(resizePanelEl.value);
// console.log(resizePanelEl.value.length);

resizePanelEl.oninput = function (event) {
  // console.log(event);
  textEl.setAttribute('style', `font-size: ${event.target.value}px`);
 //console.log(textEl.getAttribute('style'));
};