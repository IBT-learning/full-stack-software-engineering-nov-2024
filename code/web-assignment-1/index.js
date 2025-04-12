// Select elements by their ids
const banner = document.getElementById("banner");
const toggleButton = document.getElementById("toggle-btn");
const body = document.body;
let isDarkMode = false;
// const lightButton = document.getElementById('light-btn');

// Attach event listener to the dark button
toggleButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);
    body.classList.toggle('light-mode', !isDarkMode);
    toggleButton.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
});
