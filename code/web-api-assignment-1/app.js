// Selecting all the elements by their ID
const banner = document.getElementById('banner');
const darkButton = document.getElementById('dark-btn');
const lightButton = document.getElementById('light-btn');

// Check if elements exist before adding event listeners
if (banner && darkButton && lightButton) {
    // Add event listener for dark mode
    darkButton.addEventListener('click', () => {
        banner.textContent = 'Dark Mode';
        banner.style.color = 'white';
        document.body.style.backgroundColor = 'black';
    });

    // Add event listener for light mode
    lightButton.addEventListener('click', () => {
        banner.textContent = 'Light Mode';
        banner.style.color = 'black';
        document.body.style.backgroundColor = 'white';
    });
} else {
    console.error('One or more elements not found. Please check the IDs in the HTML.');
}