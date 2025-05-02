
const banner = document.getElementById("banner");
const darkbtn = document.getElementById("dark-btn");
const lightbtn = document.getElementById("light-btn");


 darkbtn.addEventListener("click", function() {
     banner.textContent = "Dark Mode";
     banner.style.color = "white";
     document.body.style.backgroundColor = "black";
 });

lightbtn.addEventListener("click", function() {
    banner.textContent = "Light Mode";
    banner.style.color = "black";
    document.body.style.backgroundColor = "white";
});


