import { data } from "./data.js";
import { grid, input, select } from "./globalVariable.js";
import { addCard } from "./addCard.js";

export const handler = () => {
  grid.innerHTML = "";
  data.forEach((el) => {
    if (el.name.toLowerCase().includes(input.value.toLowerCase()))
      if (
        select.value === "Choose one" ||
        select.value === "All school" ||
        el.house === select.value
      )
        addCard(el);
  });
};
