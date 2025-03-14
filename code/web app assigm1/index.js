

let banner = document.getElementById("banner");
let darkEl = document.getElementById("dark-btn")
let lightEl = document.getElementById("light-btn");



darkEl.addEventListener("click", function(){
    banner.textContent = "Dark Mode";
    banner.style.color = "white";
    banner.style.backgroundColor = "black";
    banner.style.width = "200px";
    banner.style.textAlign = "center";
    
})

lightEl.addEventListener("click", function(){
    banner.textContent = "light Mode";
    banner.style.color = "black";
    banner.style.backgroundColor = "tomato";
    banner.style.width = "200px";
    banner.style.textAlign = "center";
    
})