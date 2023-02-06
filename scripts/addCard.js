import { grid } from "./globalVariable.js";

export const addCard = (elem) => {
  let gridItem = document.createElement("div");
  gridItem.className = "grid__item";
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
