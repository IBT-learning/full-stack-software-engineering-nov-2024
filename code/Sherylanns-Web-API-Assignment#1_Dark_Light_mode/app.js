const banner = document.getElementById("banner");
// const darkBtn = document.getElementById("dark-btn");
// const lightBtn = document.getElementById("light-btn");

const toggleBtn = document.getElementById("toggle-btn");

// darkBtn.addEventListener("click", () => {
//   banner.textContent = "Dark Mode";
//   banner.style.color = "white";
//   document.body.style.backgroundColor = "#333";
// });

// lightBtn.addEventListener("click", () => {
//   banner.textContent = "Light Mode";
//   banner.style.color = "black";
//   document.body.style.backgroundColor = "#eee";
// });

let isDark = false;

toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.body.classList.toggle("dark-mode");

  banner.textContent = isDark ? "Dark Mode" : "Light Mode";
  toggleBtn.textContent = isDark ? "light" : "dark";
});
