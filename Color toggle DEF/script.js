let menuBtn = document.querySelector(".btn-toggle-nav");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-300px";

function menuToggle() {
  if (menuStatus == false) {
    menu.style.marginLeft = "0px";
    menuStatus = true;
  } else if (menuStatus == true) {
    menu.style.marginLeft = "-300px";
    menuStatus = false;
  }
}

menuBtn.onclick = ("click", menuToggle);

const homeClickBtn = document.getElementById("homeBtn");
const yellowClickBtn = document.getElementById("yellowBtn");
const orangeClickBtn = document.getElementById("orangeBtn");
const redClickBtn = document.getElementById("redBtn");
const blueClickBtn = document.getElementById("blueBtn");

homeClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#f1f1f1";
  menu.style.marginLeft = "-300px";
});

yellowClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#edfaa8";
  menu.style.marginLeft = "-300px";
});

orangeClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#f4bf0e";

  menu.style.marginLeft = "-300px";
});

redClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#c51c0d";
  menu.style.marginLeft = "-300px";
});

blueClickBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#1c66e6";
  menu.style.marginLeft = "-300px";
});
