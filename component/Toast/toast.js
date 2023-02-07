const leftButton = document.querySelector("#left_snackbar");
const centerButton = document.querySelector("#center_snackbar");
const rightButton = document.querySelector("#right_snackbar");
const toast = document.querySelectorAll(".display-none");
const leftToast = document.getElementById("toast_left");
const centerToast = document.getElementById("center_left");
const rightToast = document.getElementById("right_left");

function removeToast() {
  toast[0].classList.remove("display-none");
  setTimeout(() => {
    toast[0].classList.add("display-none");
  }, 5000);
}

function addToast() {
  toast[0].classList.add("display-none");
}

leftButton.addEventListener("click", removeToast);
centerButton.addEventListener("click", removeToast);
rightButton.addEventListener("click", removeToast);

leftToast.addEventListener("click", addToast);
centerButton.addEventListener("click", addToast);
rightButton.addEventListener("click", addToast);
