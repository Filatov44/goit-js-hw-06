const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

function informCategories(list) {
  list.forEach((element) => {
    const titleEl = element.querySelector("h2");
    const titleItem = element.querySelectorAll("ul > li");
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${titleItem.length}`);
  });
}

informCategories(categoriesEl);
