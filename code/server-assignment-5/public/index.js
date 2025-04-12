const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const banner = document.getElementById("banner");

// Get color pickers
const bgColorPicker = document.getElementById("bg-color-picker");
const textColorPicker = document.getElementById("text-color-picker");

// Function to get the value of a specific cookie
const getCookieValue = (keyName) => {
  if (document.cookie.includes(keyName)) {
    const nameVal = document.cookie
      .split(";")
      .find((s) => s.includes(keyName))
      .split("=")
      .at(1);
    return nameVal;
  } else {
    return null;
  }
};

// Get saved preferences (theme, bgColor, textColor) from cookies
const theme = getCookieValue("theme");
const bgColor = getCookieValue("bgColor");
const textColor = getCookieValue("textColor");

// Apply saved theme (light or dark)
const applyTheme = (theme) => {
  if (theme === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    banner.textContent = "Dark Mode";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    banner.textContent = "Light Mode";
  }
};

// Apply saved custom colors (bgColor and textColor)
const applyColors = (bgColor, textColor) => {
  if (bgColor && textColor) {
    document.body.style.backgroundColor = decodeURIComponent(bgColor);
    document.body.style.color = decodeURIComponent(textColor);
    banner.textContent = "Custom Theme";
  }
};

// Apply theme and custom colors if available in cookies
if (theme) {
  applyTheme(theme);
}

if (bgColor && textColor) {
  applyColors(bgColor, textColor);
}

// Event listener for Dark Mode button
darkBtn.addEventListener("click", async () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  banner.textContent = "Dark Mode";

  // Save theme in cookies
  await fetch(`/theme?theme=dark`);
  await fetch(`/color?bgColor=black&textColor=white`);
});

// Event listener for Light Mode button
lightBtn.addEventListener("click", async () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  banner.textContent = "Light Mode";

  // Save theme in cookies
  await fetch(`/theme?theme=light`);
  await fetch(`/color?bgColor=white&textColor=black`);
});

// Event listener for saving custom background and text color
document.getElementById("save-colors").addEventListener("click", async () => {
  const selectedBgColor = encodeURIComponent(bgColorPicker.value);
  const selectedTextColor = encodeURIComponent(textColorPicker.value);

  // Save custom colors in cookies
  await fetch(`/color?bgColor=${selectedBgColor}&textColor=${selectedTextColor}`);
  
  // Apply the new custom colors
  document.body.style.backgroundColor = decodeURIComponent(selectedBgColor);
  document.body.style.color = decodeURIComponent(selectedTextColor);
  banner.textContent = "Custom Theme";
});
