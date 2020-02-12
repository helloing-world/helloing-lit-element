import '/js/random-color-button.js';
import * as Utils from '/js/utils.js';

const buttonCount = document.getElementById('button-count');

var fragment = new DocumentFragment();

for (let index = 0; index < 1000; index++) {
  const elem = document.createElement('random-color-button');
  elem.addEventListener('click', (e) => {
    document.body.style.backgroundColor = e.target.color;

    e.target.remove();

    buttonCount.textContent = `${document.body.childElementCount}`;
  });
  fragment.appendChild(elem);
}

// document.body.appendChild(fragment);
document.body.appendChild(fragment);

// Utils.randomPosition(buttonCount);

document.querySelectorAll('.position-absolute').forEach(elem => Utils.randomPosition(elem));