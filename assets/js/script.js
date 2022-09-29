function addIcon(childName, imageName) {
  let image = document.createElement('img');
  image.className = `icon ${imageName}`;
  image.src = `./assets/images/${imageName}.svg`;
  childName.appendChild(image);
}

function addBall(childName) {
  let div = document.createElement('div');
  div.className = 'ball';
  childName.appendChild(div);
}

function removeItem(childName, className) {
  let item = document.querySelector(`.${className}`);
  console.log(item);
  childName.removeChild(item);
}

function changeBackground(divName, themeName) {
  divName.style.backgroundColor = `var(--${themeName})`;
}

function handleThemeChange(childName, backgroundDiv) {
  if (theme === 'light') {
    removeItem(childName, 'sun');
    removeItem(childName, 'ball');
    changeBackground(backgroundDiv, 'dark');
    addIcon(childName, 'moon');
    addBall(childName);

    theme = 'dark';
  } else {
    removeItem(childName, 'moon');
    removeItem(childName, 'ball');
    changeBackground(backgroundDiv, 'light');
    addBall(childName);
    addIcon(childName, 'sun');

    theme = 'light';
  }
}

let theme = 'light';

let backgroundBody = document.querySelector('.background');
let buttonArea = document.querySelector('.button__area');
let ball = document.querySelector('.ball');

buttonArea.addEventListener('click', () => handleThemeChange(buttonArea, backgroundBody));

addIcon(buttonArea, 'sun');
