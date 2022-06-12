const inputEl = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

inputEl.addEventListener("input", changeSize);

function changeSize(event) {
  return (textFontSize.style.fontSize = `${inputEl.value}px`);
}
