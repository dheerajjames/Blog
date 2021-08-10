import { navData } from "../data/data.js";
export const NavLinks = () => {
  let markUp = document.createElement("ul");
  markUp.classList.add("nav-container");

  // add link to the li
  navData.navLinks.forEach((link) => {
    let navItem = document.createElement("li");
    // adding unique ids to each link
    navItem.id = link.linkId;
    navItem.classList.add("nav-item");
    let navLink = document.createElement("a");

    // add contents
    navLink.textContent = link.title;
    // navLink.appendChild(document.createTextNode(link.title));

    navLink.href = link.href;
    link.isCta
      ? navLink.classList.add("nav-link", "btn")
      : navLink.classList.add("nav-link");

    navItem.appendChild(navLink);
    markUp.appendChild(navItem);
  });

  return markUp;
};