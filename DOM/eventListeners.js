const redButton = document.querySelector("#red-button");
const box = document.querySelector("#box");
// console.log(box);

redButton.addEventListener("click", () => box.classList.toggle("red"));

const opacity = document.querySelector("#opacity-button");
opacity.addEventListener("click", () => box.classList.toggle("opacity"));

box.addEventListener("mouseup", () => {
  box.classList.add("toYellow");
});
