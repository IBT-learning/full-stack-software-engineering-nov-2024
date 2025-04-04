// Selecting all the elements by their ID
const banner = document.getElementById('banner');
const darkButton = document.getElementById('dark-btn');
const lightButton = document.getElementById('light-btn');

// Add event listener by dark mode
darkButton.addEventListener('click', () => {
    banner.textContent = 'Dark Mode';
    banner.style.color = 'white';
    document.body.style.backgroundColor = 'black';
});

// Add event listener by light mode
lightButton.addEventListener('click', () => {
    banner.textContent = 'Light Mode'; 
    banner.style.color = 'black';
    document.body.style.backgroundColor = 'white';
});