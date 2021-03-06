const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
let counter = 1;
menuIcon.addEventListener("click", (e) => {
  counter++;
  if (counter % 2 === 0) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
