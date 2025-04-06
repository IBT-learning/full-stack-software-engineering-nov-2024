console.log(document.cookie)

// document.cookie = "firstName=Owen; SameSite=None; Secure";
// document.cookie = "lastName=Iraoya; SameSite=None; Secure"

// document.cookie = "lastName=Burrow; SameSite=None; Secure:expires"

const getCookieValue = (keyName) => {
    if (document.cookie.includes(keyName)) {
        // const nameVal = document.cookie.split(";").find((c) => c.includes("firstName")).split("=").at[1];
        const nameVal = document.cookie.split(";").find((c) => c.includes(keyName)).split("=")[1];
        return nameVal;
    } else {
        return null;
    }
}

// getCookieValue("firstName");


const button = document.getElementById("color-button");
const input = document.querySelector("input[type=color]");

// console.log(input);

console.log(getCookieValue("color"))
document.body.style.backgroundColor = `#${decodeURIComponent(getCookieValue("color"))}`;

button.addEventListener("click", (e) => {
    // e.preventDefault();
    // document.body.style.backgroundColor = input.value;
    let selectedColor = input.value.substring(1); // Remove `#` for storage

    document.body.style.backgroundColor = `#${selectedColor}`;
    document.cookie = `color=${selectedColor}; path=/`;
    fetch(`/color?bgColor=${selectedColor}`);

})