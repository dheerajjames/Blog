import { navData } from "../data/data.js";

export const Logo = () => {
  const markup = document.createElement("div");
  markup.classList.add("company-logo");
  let logo = document.createElement("img");
  logo.src = navData.logo.imgSrc;
  logo.alt = navData.logo.alt;
  logo.classList.add("logo");
  markup.appendChild(logo);

  return markup;
};
