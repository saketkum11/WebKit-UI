const navToggle = document.querySelector("#nav-button");
const sideNav = document.querySelector(".nav-active");
const closeBtn = document.querySelector("#close-button");
const drawerMenu = document.querySelector("#menu-navigation");
const drawer = document.querySelector(".drawer");
const arrowUp = document.querySelector(".fa-sharp");

let menuFlag = false;

// menu button //

navToggle.addEventListener("click", () => {
  sideNav.classList.add("display-block");
});

closeBtn.addEventListener("click", () => {
  sideNav.classList.remove("display-block");
});

// drawer menu //

drawerMenu.addEventListener("click", () => {
  menuFlag = !menuFlag;
  if (menuFlag === true) {
    drawer.classList.add("display-block");
    arrowUp.classList.replace("fa-arrow-down", "fa-arrow-up");
  }
  if (menuFlag === false) {
    drawer.classList.remove("display-block");
    arrowUp.classList.replace("fa-arrow-up", "fa-arrow-down");
  }
});
