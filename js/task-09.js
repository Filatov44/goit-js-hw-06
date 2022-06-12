const buttonEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", colorChange);

function colorChange() {
  const randomColorEl = getRandomHexColor();
  colorTextEl.textContent = randomColorEl;
  bodyEl.style.backgroundColor = `${randomColorEl}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
