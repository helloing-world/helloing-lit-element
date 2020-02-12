import './random-color-button.js';

var fragment = new DocumentFragment();

for (let index = 0; index < 1000; index++) {
  const elem = document.createElement('random-color-button');
  elem.addEventListener('click', (e) => {
    document.body.style.backgroundColor = e.target.color;

    // Update the theme-color meta tag to update the browser toolbar color (on browsers that support this feature)
    document.querySelector("meta[name=theme-color]").setAttribute("content", e.target.color);

    e.target.remove();
    document.title = `${document.body.childElementCount} Random Color Buttons`;
  });
  fragment.appendChild(elem);
}

document.body.appendChild(fragment);