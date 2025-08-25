// Get DOM elements
const banner = document.getElementById('banner');
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');
const toggleBtn = document.getElementById('toggle-btn');
const bgColorInput = document.getElementById('bg-color');
const textColorInput = document.getElementById('text-color');
const applyCustomBtn = document.getElementById('apply-custom');
const resetBtn = document.getElementById('reset-btn');

// Current mode state
let currentMode = 'light';

// Initialize the page based on saved preferences
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
});

// Event listeners for mode buttons
darkBtn.addEventListener('click', () => {
    setDarkMode();
    savePreference('mode', 'dark');
});

lightBtn.addEventListener('click', () => {
    setLightMode();
    savePreference('mode', 'light');
});

toggleBtn.addEventListener('click', () => {
    if (currentMode === 'light') {
        setDarkMode();
        savePreference('mode', 'dark');
    } else {
        setLightMode();
        savePreference('mode', 'light');
    }
});

// Custom theme event listeners
applyCustomBtn.addEventListener('click', () => {
    const bgColor = bgColorInput.value;
    const textColor = textColorInput.value;
    setCustomTheme(bgColor, textColor);
    savePreference('customBg', bgColor);
    savePreference('customText', textColor);
    savePreference('mode', 'custom');
});

// Reset preferences
resetBtn.addEventListener('click', () => {
    resetPreferences();
});

// Function to set dark mode
function setDarkMode() {
    currentMode = 'dark';
    banner.textContent = 'Dark Mode';
    document.body.className = 'dark-mode';
    updateToggleButton();
    
    // Reset custom colors if they were applied
    document.body.style.backgroundColor = '';
    banner.style.color = '';
}

// Function to set light mode
function setLightMode() {
    currentMode = 'light';
    banner.textContent = 'Light Mode';
    document.body.className = '';
    updateToggleButton();
    
    // Reset custom colors if they were applied
    document.body.style.backgroundColor = '';
    banner.style.color = '';
}

// Function to set custom theme
function setCustomTheme(bgColor, textColor) {
    currentMode = 'custom';
    banner.textContent = 'Custom Mode';
    document.body.className = '';
    document.body.style.backgroundColor = bgColor;
    banner.style.color = textColor;
    document.body.style.color = textColor;
    updateToggleButton();
}

// Update toggle button text
function updateToggleButton() {
    if (currentMode === 'dark') {
        toggleBtn.textContent = 'Light';
    } else if (currentMode === 'light') {
        toggleBtn.textContent = 'Dark';
    } else {
        toggleBtn.textContent = 'Switch';
    }
}

// Function to save preference via server
async function savePreference(key, value) {
    try {
        const response = await fetch(`/api/preference?${key}=${encodeURIComponent(value)}`);
        if (!response.ok) {
            console.error('Failed to save preference');
        }
    } catch (error) {
        console.error('Error saving preference:', error);
    }
}

// Function to load preferences from cookies
function loadPreferences() {
    const cookies = parseCookies();
    
    if (cookies.mode === 'dark') {
        setDarkMode();
    } else if (cookies.mode === 'custom' && cookies.customBg && cookies.customText) {
        bgColorInput.value = cookies.customBg;
        textColorInput.value = cookies.customText;
        setCustomTheme(cookies.customBg, cookies.customText);
    } else {
        setLightMode();
    }
}

// Function to parse cookies from document.cookie
function parseCookies() {
    const cookies = {};
    if (document.cookie) {
        document.cookie.split(';').forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name && value) {
                cookies[name] = decodeURIComponent(value);
            }
        });
    }
    return cookies;
}

// Function to reset all preferences
async function resetPreferences() {
    try {
        const response = await fetch('/api/reset-preferences');
        if (response.ok) {
            // Reset to light mode
            setLightMode();
            
            // Reset custom color inputs
            bgColorInput.value = '#ffffff';
            textColorInput.value = '#000000';
            
            console.log('Preferences reset successfully');
        } else {
            console.error('Failed to reset preferences');
        }
    } catch (error) {
        console.error('Error resetting preferences:', error);
    }
}