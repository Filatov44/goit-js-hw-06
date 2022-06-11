const counterValueNumber = document.querySelector("#value");
let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function decrement() {
  counterValue -= 1;
  counterValueNumber.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counterValueNumber.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
