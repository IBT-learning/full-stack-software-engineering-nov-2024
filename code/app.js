const banner = document.getElementById('banner');
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

let isDarkMode = false;

toggleBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.add('dark-mode');
    banner.textContent = 'Dark Mode';
    toggleBtn.textContent = 'Switch to Light Mode';
  } else {
    body.classList.remove('dark-mode');
    banner.textContent = 'Light Mode';
    toggleBtn.textContent = 'Switch to Dark Mode';
  }
});

