const header = document.getElementById("banner");
const dark = document.getElementById("dark-btn");
const light = document.getElementById("light-btn");
const switchButton = document.getElementById("switch");
const body = document.getElementsByTagName("body")[0];

const getCookieValue = (keyName) => {
  let cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    let [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});

  return cookies[keyName] ? decodeURIComponent(cookies[keyName]) : null;
};

let color;

  if (`${decodeURIComponent(getCookieValue("background"))}`.includes("#")) {
    color = decodeURIComponent(getCookieValue("background"));
  } else {
    color = `#${decodeURIComponent(getCookieValue("background"))}`;
  }

  body.style.backgroundColor = color;



switchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (header.innerHTML == "Light Mode") {
    header.innerHTML = "Dark Mode";
    header.classList.toggle("to-white");
    body.classList.toggle("to-black");


  } else if (header.innerHTML == "Dark Mode") {
    header.innerHTML = "Light Mode";
    header.classList.remove("to-white");
    body.classList.remove("to-black");
  }
});
