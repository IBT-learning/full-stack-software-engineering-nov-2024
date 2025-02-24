// select all the three elements
const modeBanner = document.getElementById("banner");
const darkButton = document.getElementById("dark-btn");
const lightButton = document.getElementById("light-btn");


// attach event listener to darkButton and lightButton

// darkButton.addEventListener("click", () => {
//     modeBanner.textContent = "Dark Mode";  // change the textContent of the banner to Dark mode
//     modeBanner.style.color = "#eee";         // change the color of the banner to light gray
//     modeBanner.style.backgroundColor = "#333"; // change the background color of the body to dark gray 
// });
// lightButton.addEventListener("click", () => {
//     modeBanner.textContent = "Light Mode";     // change the textContent of the banner to light Mode
//     modeBanner.style.color = "#333";           // change the color of the banner to dark gray
//     modeBanner.style.backgroundColor = "#eee";  // change the background color of the body to light gray
// });


//Toggle the class instead of editing the style properties.

// darkButton.addEventListener("click", () => {
//     modeBanner.textContent = "Dark mode";
//     document.body.classList.add("dark-mode"); // add the css property
// });

// lightButton.addEventListener("click", () => {
//     modeBanner.textContent = "Light mode";
//     document.body.classList.remove("dark-mode"); // remove the css property
// });


// replaced the darkButton and lightButton with one button(switchBtn)
const switchBtn = document.getElementById("switch-btn");
let isDarkMode = false;

switchBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode){
        modeBanner.textContent = "Dark Mode";
        document.body.classList.add("dark-mode");
        switchBtn.textContent = "Light"
    } else {
        modeBanner.textContent = "Light Mode";
        document.body.classList.remove("dark-mode");
        switchBtn.textContent = "Dark";
    }
});