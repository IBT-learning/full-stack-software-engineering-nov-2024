const banner = document.getElementById('banner');
const toggleBtn = document.getElementById('toggle-btn');
let isDarkMode = false;

toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark');
    
    if (isDarkMode) {
        banner.textContent = 'Dark Mode';
        toggleBtn.textContent = 'light';
    } else {
        banner.textContent = 'Light Mode';
        toggleBtn.textContent = 'dark';
    }
});