
import { Logo } from "./logo.js";
import { NavLinks } from "./navLink.js";

export const NavigationBar = () => {
  const markUp = document.createElement("div");
  markUp.classList.add("navigation");
  let theme =document.createElement("button");
  theme.classList.add("themeButton");
  theme.textContent = "Dark";
  let bodytheme = document.body;
  theme.onclick = () => {
      bodytheme.classList.toggle("themeChange");
      if (theme.textContent === "Light") {
        theme.textContent = "Dark";
      } else {
        theme.textContent = "Light";
      }
  }
  markUp.appendChild(Logo());
//   markUp.appendChild(Hamburger());
markUp.appendChild(theme);
  markUp.appendChild(NavLinks());

  return markUp;
};
