const banner = document.getElementById("banner");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  // toggle the dark mode class on body
  const isDark = document.body.classList.toggle("dark-mode");

  // update banner text based on the mode

  if (isDark) {
    banner.textContent = "Dark Mode";
    toggleBtn.textContent = "Light";
  } else {
    banner.textContent = "Light Mode";
    toggleBtn.textContent = "Dark";
  }
});
