const banner = document.getElementById("banner");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

darkBtn.addEventListener("click", () => {
  banner.textContent = "Dark Mode";
  banner.style.color = "white";
  document.body.style.backgroundColor = "black";
});

lightBtn.addEventListener("click", () => {
  banner.textContent = "Light Mode";
  banner.style.color = "black";
  document.body.style.backgroundColor = "white";
});
