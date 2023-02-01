import { data } from "./data.js";

const grid = document.querySelector(".main__grid");
const input = document.querySelector(".header__input");
const select = document.querySelector(".header__select");

const addCard = (elem) => {
  let gridItem = document.createElement("div");
  gridItem.innerHTML = `
            <img
              class="item__img"
              src=${elem.image}
              alt=""
            />
            <div class="item__text-wrapper">
              <h2 class="item__title">${elem.name}</h2>
              <p class="item__text">Actor: ${elem.actor}</p>
              <p class="item__text">Gender: ${elem.gender}</p>
              <p class="item__text">House: ${elem.house}</p>
              <p class="item__text">Wand core: ${elem.wand.core}</p>
                <p class="item__text">Alive: ${elem.alive}</p>`;
  grid.append(gridItem);
};

data.forEach((el) => addCard(el));

const handler = () => {
  grid.innerHTML = "";
  data.forEach((el) => {
    if (el.name.toLowerCase().includes(input.value.toLowerCase()))
      if (select.value === "Choose one" || el.house === select.value)
        addCard(el);
  });
};

input.addEventListener("input", handler);

select.addEventListener("change", handler);
