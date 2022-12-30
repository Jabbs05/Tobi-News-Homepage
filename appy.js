const hamburger = document.querySelector('.ham');
const menu = document.querySelector('.burger');

// Toggle navigation slider
function toggle() {
  if (menu.style.transform === "translateX(700px)" ) {
    menu.style.transform = "translateX(120px)";
    menu.style.transition = "0.5s";
    menu.style.backgroundcolor = "red"
  } else {
    menu.style.transform = "translateX(700px)";
  }
}
hamburger.addEventListener("click", toggle);
// // Toggle navigation slider
// const nav = document.querySelector(".aside3");
// const hamburger = document.querySelector(".menu");
// const rhs = document.querySelector(".new");
// function toggle() {
//   if (nav.style.transform === "translateX(-700px)") {
//     nav.style.transform = "translateX(0px)";
//     nav.style.transition = "0.5s";
//   } else {
//     nav.style.transform = "translateX(-700px)";
//   }
// }
// hamburger.addEventListener("click", toggle);