// Theme Switcher Class
class ThemeSwitcher {
    constructor() {
        // DOM Elements
        this.banner = document.getElementById('banner');
        this.themeToggle = document.getElementById('theme-toggle');
        this.buttonText = this.themeToggle.querySelector('.button-text');
        
        // State
        this.isDarkMode = false;

        // Bind methods
        this.toggleTheme = this.toggleTheme.bind(this);
        
        // Initialize
        this.initialize();
    }

    initialize() {
        // Add event listener
        this.themeToggle.addEventListener('click', this.toggleTheme);

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.setDarkMode();
        }

        // Check system preference if no saved theme
        if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setDarkMode();
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', e => {
                if (!localStorage.getItem('theme')) {
                    e.matches ? this.setDarkMode() : this.setLightMode();
                }
            });
    }

    toggleTheme() {
        this.isDarkMode ? this.setLightMode() : this.setDarkMode();
    }

    setDarkMode() {
        document.body.classList.add('dark-mode');
        this.banner.textContent = 'Dark Mode';
        this.buttonText.textContent = 'Switch to Light Mode';
        this.isDarkMode = true;
        localStorage.setItem('theme', 'dark');
    }

    setLightMode() {
        document.body.classList.remove('dark-mode');
        this.banner.textContent = 'Light Mode';
        this.buttonText.textContent = 'Switch to Dark Mode';
        this.isDarkMode = false;
        localStorage.setItem('theme', 'light');
    }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});