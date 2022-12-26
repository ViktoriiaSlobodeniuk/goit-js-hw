// const listClass = document.querySelector(".menu");
// console.log(listClass);
// listClass.style.color = "black";
// listClass.style.fontSize = "45px";
// const firstLi = document.querySelector("li");
// firstLi.style.color = "grey";
// console.log(firstLi);
// firstLi.textContent = "А я не такой, я не такой, я не такой!";
// const allLi = document.querySelectorAll(".menu_item");
// console.log(allLi);

// allLi.textContent = "Всі ми одним миром мазані 😉";
// for (const li of allLi) {
//   li.textContent = "Всі ми одним миром мазані 😉";
//   li.style.color = "pink";
// }
// console.log(listClass.classList);
// console.log(listClass.classList.contains("n"));
// console.log(listClass.classList.contains("menu"));
// console.log(listClass.classList.add("new"));

// listClass.classList.add("a", "ab");
// console.log(listClass.classList);
// listClass.classList.toggle("here");
// console.log(listClass.classList);
// listClass.classList.toggle("here");
// console.log(listClass.classList);
// listClass.classList.toggle("here");
// console.log(listClass.classList);
// listClass.classList.toggle("here");
// console.log(listClass.classList);

// console.log(listClass.hasAttribute("gg"));
// listClass.setAttribute("gg1", "ttt");
// listClass.setAttribute("gg2", "tttt");
// listClass.setAttribute("gg3", "ttttt");
// console.log(listClass.hasAttribute("gg"));
// console.log(listClass);
// console.log(listClass.getAttribute("gg1"));
// console.log(listClass.attributes);

// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// listClass.after(text);

// const newT = listClass.querySelectorAll("li");
// console.log(newT);
// for (const newTOne of newT) {
//   newTOne.textContent += "😊";
//   console.log(newTOne);
// }
// const image = document.querySelector("img");
// image.src = "./images/Screenshot_20221028-155551_Facebook.jpg";
// image.alt = "nina";
// console.log(image);
// image.style.width = "400px";
// // image.style.heigth = "100px";
// console.log(allLi.textContent);
// console.log(text.textContent);
// // console.log(image.getAttribute("src"));
// // image.removeAttribute("src");
// // console.log(image.hasAttribute("src"));
// // console.log(image.getAttribute("alt"));

// const actions = document.querySelectorAll(".js-actions button");
// console.log(actions[0]);
// actions[0].style.backgroundColor = "green";
// actions[1].style.backgroundColor = "lightblue";
// actions[2].style.backgroundColor = "yellow";
// console.log(actions[2].dataset);
// const inputEl = document.querySelector(".js-input");
// console.log("here:", inputEl.value);
// inputEl.value = "vfvf2222";
// console.log("here:", inputEl.value);
// const imgEl = document.createElement("img");
// imgEl.src =
//   "https://cdn.pixabay.com/photo/2022/11/07/06/23/european-crested-tit-7575701_960_720.jpg";
// imgEl.width = "600";
// imgEl.alt = "bird";
// console.log(imgEl);
// document.body.appendChild(imgEl);

// colorPikerOptions = [
//   { label: "red", color: "#d30909" },
//   { label: "green", color: "#179f3d" },
//   { label: "orange", color: "#eb4c08" },
//   { label: "purple", color: "#ae117f" },
//   { label: "blue", color: "#2663e6" },
//   { label: "grey", color: "#697D8B" },
// ];

// const buttonEl = document.createElement("button");
// buttonEl.type = "button";
// buttonEl.textContent = colorPikerOptions[0].label;
// buttonEl.style.backgroundColor = colorPikerOptions[0].color;
// console.log(buttonEl);

// const elements = [];
// for (let i = 0; i < colorPikerOptions.length; i++) {
//   const sampleEl = colorPikerOptions[i];

//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = sampleEl.label;
//   buttonEl.style.backgroundColor = sampleEl.color;
//   buttonEl.classList.add("color_piker--opt");
//   console.log(buttonEl);
//   elements.push(buttonEl);
// }

// const elements = colorPikerOptions.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   buttonEl.classList.add("color_piker--opt");
//   console.log(buttonEl);
//   return buttonEl;
// });

// console.log(elements);
// const colorPikerOptionsContainerEl = document.querySelector(".js-color_piker");
// colorPikerOptionsContainerEl.append(...elements);

// const makeColorPikerOptions = (masiv) => {
//   return masiv.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     buttonEl.classList.add("color_piker--opt");
//     console.log(buttonEl);
//     return buttonEl;
//   });
// };
// const elements = makeColorPikerOptions(colorPikerOptions);
// console.log(elements);

// const colorPikerOptionsContainerEl = document.querySelector(".js-color_piker");
// colorPikerOptionsContainerEl.append(...elements);
/**
  |============================
  | 
  |============================
*/
// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);
/**
  |============================
  | 
  |============================
*/
// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

const cars = [
  {
    id: 1,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 33,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 3,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 4,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

// const form = document.querySelector(".js-search");
// const list = document.querySelector(".list");

// form.addEventListener("submit", onSearch);
// // console.log(form);

// function onSearch(event) {
//   event.preventDefault();

//   const { queryValue, selectValue } = event.currentTarget.elements;

//   // console.log(typeof queryValue.value);
//   // console.log(typeof selectValue.value);

//   const searchResult = cars.filter(
//     (item) => item[selectValue.value] === queryValue.value
//   );
//   console.log(searchResult);

//   const markup = searchResult
//     .map(
//       ({ car, type, price, img }) => `<li>
//   <img src="${img}" alt="${car}" width='300'>
//   <h2>${car}</h2>
//   <h3>${type}</h3>
//   <h4>${price}</h4>
//   </li>`
//     )
//     .join("");
//   list.innerHTML = markup;

// const searchResult = cars
//   .filter((item) => item[selectValue.value] === queryValue.value)
//   .map(
//     ({ car, type, price, img }) => `<li>
// <img src="${img}" alt="${car}" width='300'>
// <h2>${car}</h2>
// <h3>${type}</h3>
// <h4>${price}</h4>
// </li>`
//   )
//   .join("");
// list.innerHTML = searchResult;
// }

// const inputEl = document.querySelector(".js-input");

// inputEl.addEventListener("input", onInput);

// function onInput(evt) {
//   const query = evt.currentTarget.value;

//   if (!query) {
//     console.log("empty");
//   }
// }

// document.addEventListener("keydown", onPress);

// function onPress(evt) {
//   console.log(evt);

//   const keyName = "KeyA";
//   if (evt.code === keyName) {
//     console.log("catch");
//   } else {
//     console.log("nooo..");
//   }
// }

// const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

// const markup = galleryItems
//   .map(
//     ({ preview, original, description }) => `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__img"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//   )
//   .join("");
// galleryEl.innerHTML = markup;

// galleryEl.addEventListener("click", onClick);
// function onClick(evt) {
//   console.log(evt.target);
// }

// function onLinkCklick(evt) {
//   evt.preventDefault();
// }налаштувати превент дефолт

console.log("jjj");

let count = 0;

function cc(card) {
  // Змініть код лише під цим рядком
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + "Hold";
  }
}
console.log(count);

console.log(cc(2));
