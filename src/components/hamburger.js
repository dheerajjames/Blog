
  import { baseLink } from "../data/data.js";
  export const Hamburger = () => {
    const state = {
      isMenuOpen: false,
    };
  
    const openMenu = () => {
      state.isMenuOpen = !state.isMenuOpen;
      let navContainer = document.querySelector(".nav-container");
  
      if (state.isMenuOpen) {
        menuIcon.src = `${baseLink}/webpage/close.png`;
        navContainer.classList.add("open-nav");
      } else {
        menuIcon.src = `${baseLink}/webpage/menu-black.png`;
        navContainer.classList.remove("open-nav");
      }
    };
  
    const markUp = document.createElement("div");
    markUp.classList.add("hamburger-menu");
    markUp.addEventListener("click", openMenu);
    const menuIcon = document.createElement("img");
    menuIcon.src = `${baseLink}/webpage/menu-black.png`;  
    markUp.appendChild(menuIcon);
    return markUp;
  };
  