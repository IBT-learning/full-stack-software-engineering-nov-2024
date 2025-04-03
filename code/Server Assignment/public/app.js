// Select elements
const banner = document.getElementById("banner");
const toggleBtn = document.getElementById("toggle-btn"); // Ensure correct ID

// Function to get cookies
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

// Load theme from cookies
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = getCookie("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        banner.textContent = "Dark Mode";
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        banner.textContent = "Light Mode";
        toggleBtn.textContent = "Switch to Dark Mode";
    }

    // Toggle event (Unified)
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        banner.textContent = currentTheme === "dark" ? "Dark Mode" : "Light Mode";
        toggleBtn.textContent = currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

        // Save theme preference
        fetch(`/set-theme?theme=${currentTheme}`)
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.error("Error:", error));
    });
});
