const banner = document.getElementById("banner");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

function applyTheme(theme) {
  if (theme === "dark") {
    banner.textContent = "Dark Mode";
    banner.style.color = "white";
    document.body.style.backgroundColor = "black";
  } else {
    banner.textContent = "Light Mode";
    banner.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
}

darkBtn.addEventListener("click", () => {
  applyTheme("dark");
  fetch("/save-cookie?theme=dark");
});

lightBtn.addEventListener("click", () => {
  applyTheme("light");
  fetch("/save-cookie?theme=light");
});

window.addEventListener("load", () => {
  const cookie = document.cookie
    .split("; ")
    .find(row => row.startsWith("theme="));

  if (cookie) {
    const theme = cookie.split("=")[1];
    applyTheme(theme);
  }
});
