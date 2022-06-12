const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", borderColor);

function borderColor(event) {
  const inputValueEl = event.currentTarget.value;
  const inputLength = inputValueEl.length;
  const inputDataLength = Number(inputEl.dataset.length);

  if (inputLength === inputDataLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
