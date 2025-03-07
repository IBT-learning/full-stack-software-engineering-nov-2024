

const banner  = document.getElementById("banner");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn")
const body = document.body


darkBtn.addEventListener("click", ()=> {

    body.classList.add('dark')
    banner.innerText = "Dark Mode";
   
})

lightBtn.addEventListener("click", ()=> {
    body.classList.remove('dark')
    banner.innerText = "Light Mode";
   
})