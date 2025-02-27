// Select elements
const banner = document.getElementById("banner");
const toggleBtn = document.getElementById("toggle-btn");

// Add event listener to toggle button
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        banner.textContent = "Dark Mode";
        toggleBtn.textContent = "Switch to Light";
    } else {
        banner.textContent = "Light Mode";
        toggleBtn.textContent = "Switch to Dark";
    }
});
