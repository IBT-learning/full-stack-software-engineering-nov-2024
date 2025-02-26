const heading = document.getElementById('banner');
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');
const body = document.body;

function toggleMode(isLightMode){
  if (!isLightMode){
    heading.textContent = 'Dark Mode';
    body.classList.remove('whiteBackground');
    body.classList.add('blackBackground');
    heading.classList.remove('blackText');
    heading.classList.add('whiteText');
  }else{
    heading.textContent = 'Light Mode';
    body.classList.remove('blackBackground');
    body.classList.add('whiteBackground');
    heading.classList.remove('whiteText');
    heading.classList.add('blackText');
  }
}

darkBtn.addEventListener('click', function(){
  toggleMode(false);
});
lightBtn.addEventListener('click', function(){
  toggleMode(true);
});

// notes to self: the addEventListener() method only takes a function object not function call, so always use a wrapper of some sort when passing an event handler with an argument. :)