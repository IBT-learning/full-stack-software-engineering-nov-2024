// Select elements
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("open-menu-bar");
const closeBtn = document.getElementById("close-menu-bar");

// Open sidebar
openBtn.addEventListener("click", () => {
    sidebar.style.display = "block";
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
    sidebar.style.display = "none";
    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-menu a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            links.forEach(item => item.classList.remove("active"));
            
            // Add active class to the clicked link
            this.classList.add("active");

            // Store active link in localStorage
            localStorage.setItem("activeLink", this.getAttribute("href"));
        });
    });

    // Preserve active link on page reload
    const activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
        links.forEach(link => {
            if (link.getAttribute("href") === activeLink) {
                link.classList.add("active");
            }
        });
    }
});

