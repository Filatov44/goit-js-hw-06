const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.listStyle = "none";
galleryEl.style.display = "flex";
galleryEl.style.flexDirection = "column";
galleryEl.style.alignItems = "center";

function addElement(element) {
  return element
    .map(
      (elem) =>
        `<li class ="gallery__item">
      <img class ="gallery__img" src = ${elem.url} alt = "${elem.alt}" >
      </li>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", addElement(images));

const imgEl = document.querySelectorAll(".gallery__img");
imgEl.forEach((element) => {
  element.style.width = "300px";
});

// galleryEl.insertAdjacentHTML(
//   "beforeend",
//   images
//     .map(
//       (element) =>
//         `<li class ="gallery__item">
//       <img class ="gallery__img" src = ${element.url} alt = "${element.alt}" >
//       </li>`
//     )
//     .join("")
// );
