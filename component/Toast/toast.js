const leftButton = document.querySelector("#left_snackbar");
const centerButton = document.querySelector("#center_snackbar");
const rightButton = document.querySelector("#right_snackbar");
const toast = document.querySelectorAll(".display-none");
const leftToast = document.getElementById("toast_left");
const centerToast = document.getElementById("toast_center");
const rightToast = document.getElementById("toast_right");

toast.forEach((singleItem) => {
  singleItem.addEventListener("click", () => {
    singleItem.classList.add("display-none");
  });
});

function timeCloseToast() {
  setTimeout(() => {
    leftToast.classList.add("display-none");
    centerToast.classList.add("display-none");
    rightToast.classList.add("display-none");
  }, 5000);
}

function closeLeftToast() {
  leftToast.classList.add("display-none");
}
function closeCenterToast() {
  centerToast.classList.remove("display-none");
}
function closeRightToast() {
  rightToast.classList.remove("display-none");
}

leftButton.addEventListener("click", () => {
  leftToast.classList.remove("display-none");
  timeCloseToast();
});
centerButton.addEventListener("click", () => {
  centerToast.classList.remove("display-none");
  timeCloseToast();
});
rightButton.addEventListener("click", () => {
  rightToast.classList.remove("display-none");
  timeCloseToast();
});
