const banner = document.getElementById("banner");
// const darkBtn = document.getElementById("dark-btn");
// const lightBtn = document.getElementById("light-btn");
const toggleBtn = document.getElementById("toggle-btn");

// darkBtn.addEventListener("click", () => {
//   banner.textContent = "Dark Mode";
//   banner.style.color = "white";
//   document.body.style.backgroundColor = "black";
// });

// lightBtn.addEventListener("click", () => {
//   banner.textContent = "Light Mode";
//   banner.style.color = "black";
//   document.body.style.backgroundColor = "white";
// });

let isDarkMode = false;

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    banner.textContent = "Dark Mode";
    toggleBtn.textContent = "Light";
    document.body.style.backgroundColor = "darkgray";
    document.body.style.color = "white";
  } else {
    banner.textContent = "Light Mode";
    toggleBtn.textContent = "Dark";
    document.body.style.backgroundColor = "lightgray";
    document.body.style.color = "black";
  }
});
