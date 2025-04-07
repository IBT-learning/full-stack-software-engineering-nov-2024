// For the Nav Profile
let nav__profile_text = document.querySelector('.nav__profile-con--text')
let nav__profile_toolip = document.querySelector('.nav__profile-con-toolip')
let toolip__icon = document.getElementById('toolip__icon')

nav__profile_text.addEventListener('click',()=>{
    nav__profile_toolip.classList.toggle("hidden")
    nav__profile_toolip.classList.toggle("flex")
    toolip__icon.classList.toggle("rotate-90")
})
// End of Nav Profile

// For the Hamburger
let nav__burger_con = document.querySelector('.nav__burger-con')

let nav__burger_items = document.querySelector('.nav__burger-con--items')
let nav__burger_items1 = document.querySelector('.nav__burger-con--items1')
let nav__burger_items2 = document.querySelector('.nav__burger-con--items2')

let mobile__nav = document.querySelector('.mobile__nav')

nav__burger_con.addEventListener('click',()=>{
    nav__burger_con.classList.toggle("active")
    nav__burger_items.classList.toggle("active")
    nav__burger_items1.classList.toggle("active")
    nav__burger_items2.classList.toggle("active")
    mobile__nav.classList.toggle("active")
})
// End of Hambureger

// On Window Resiize
window.addEventListener('resize',()=>{
    if (window.innerWidth > 1130 ){
        mobile__nav.classList.remove("active")
        nav__burger_con.classList.remove("active")
        nav__burger_items.classList.remove("active")
        nav__burger_items1.classList.remove("active")
        nav__burger_items2.classList.remove("active")

    }
})

// alert(window.innerWidth)