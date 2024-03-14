let openMenu = document.querySelector(".openMenu");
let Menu = document.querySelector("ul.mobile");

openMenu.addEventListener("click", () => {
  Menu.style.left = "0";
});

let closeMenu = document.querySelector(".closeMenu");

closeMenu.addEventListener("click", () => {
  Menu.style.left = "-700px";
});
