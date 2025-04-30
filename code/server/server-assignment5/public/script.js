const heading = document.getElementById('banner');
const themeBtn = document.getElementById('mode-btn');
const body = document.body;

let isLightMode = true;

function toggleMode(){
  isLightMode = !isLightMode; 

  heading.textContent = isLightMode ? 'Light Mode' : 'Dark Mode';
  body.classList.toggle('darkMode', !isLightMode);
  body.classList.toggle('ligthMode', isLightMode);
}

// to get value of cookies
function getCookieVal(keyName){
  if (document.cookie.includes(keyName)) {
    const nameVal = document.cookie
      .split(";")
      .find((string) => string.includes(keyName))
      .split("=")
      .at(1);

    return nameVal;
  } else {
    return null;
  }
}

// Set theme based on cookie when page loads
document.addEventListener('DOMContentLoaded', () => {
  const savedColor = getCookieVal('color');

  if (savedColor === 'black') {
    isLightMode = false;
    heading.textContent = 'Dark Mode';
    body.classList.add('darkMode');
    body.classList.remove('lightMode');
  } else {
    isLightMode = true;
    heading.textContent = 'Light Mode';
    body.classList.add('lightMode');
    body.classList.remove('darkMode');
  }
});


themeBtn.addEventListener('click', () => {
  toggleMode();

  const color = isLightMode ? 'white' : 'black';
  fetch(`/background?bgColor=${color}`);
});
