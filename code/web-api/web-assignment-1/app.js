const header = document.getElementById("banner");
const dark = document.getElementById("dark-btn");
const light = document.getElementById("light-btn");
const switchButton = document.getElementById("switch");
const body = document.getElementsByTagName("body")[0];

// DARK MODE

// dark.addEventListener("click", () => (header.innerText = "Dark Mode"));

// dark.addEventListener("click", () => header.classList.toggle("to-white"));

// dark.addEventListener("click", () => body.classList.toggle("to-black"));

//Light Mode

// light.addEventListener("click", () => (header.innerHTML = "Light Mode"));

// light.addEventListener("click", () => {
//   header.classList.remove("to-white");
// });

// light.addEventListener("click", () => {
//   body.classList.remove("to-black");
// });

switchButton.addEventListener("click", () => {
  if (header.innerHTML == "Light Mode") {
    header.innerHTML = "Dark Mode";
    header.classList.toggle("to-white");
    body.classList.toggle("to-black");
  } else if (header.innerHTML == "Dark Mode") {
    header.innerHTML = "Light Mode";
    header.classList.remove("to-white");
    body.classList.remove("to-black");
  }
});
