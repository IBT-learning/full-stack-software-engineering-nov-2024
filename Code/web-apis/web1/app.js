const banner = document.getElementById("banner");
const toggleBtn = document.getElementById("toggle-btn");

let darkMode = false;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  document.body.classList.toggle("dark-mode", darkMode);

  if (darkMode) {
    banner.textContent = "Dark Mode";
    toggleBtn.textContent = "light";
  } else {
    banner.textContent = "Light Mode";
    toggleBtn.textContent = "dark";
  }
});
