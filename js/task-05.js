const textInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
const DefaultValue = "Anonymous";

textInputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value != "") {
    nameOutputEl.textContent = event.currentTarget.value;
  } else nameOutputEl.textContent = DefaultValue;
});
