//1
const allElements = document.body.children;
const bannerElement = allElements[0];
const darkButton = allElements[1];
const lightButton = allElements[2];
const switchBtn = document.getElementById("switch");

switchBtn.addEventListener("click", ({ target }) => {
  if (target.value == "light-mode") {
    target.value = "dark-mode";
    toDarkMode();
    console.log(" from dark mode to  light mode-", target.value);
  } else {
    target.value = "light-mode";
    toLightMode();
    console.log(" from light mode to  dark mode-", target.value);
  }
});
console.log(allElements);
function toDarkMode() {
  bannerElement.textContent = "DArk Mode";
  document.body.classList.add("dark-mode");
}
function toLightMode() {
  bannerElement.textContent = "Light Mode";
  document.body.classList.remove("dark-mode");
}
