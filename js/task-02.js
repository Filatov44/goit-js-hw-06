const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
let ingredientList = [];

function createElement(element) {
  element.forEach((element) => {
    const ingredient = document.createElement("li");
    ingredient.textContent = element;
    ingredient.classList.add("item");
    ingredientList.push(ingredient);
  });
}
createElement(ingredients);

ingredientsEl.append(...ingredientList);
