function startGame() {
  alert("Think of a number between 1 and 100, and I will try to guess it.");
  alert("Please respond with: 'h' for higher, 'l' for lower, or 'c' for correct.");

  let low = 1;
  let high = 100;
  let guess;
  let attempts = 0;

  while (low <= high) {
    guess = Math.floor((low + high) / 2);
    attempts++;

    const response = prompt(`Is your number higher (h), lower (l), or correct (c) than ${guess}?`).toLowerCase();

    if (response === "h") {
      low = guess + 1;
    } else if (response === "l") {
      high = guess - 1;
    } else if (response === "c") {
      alert(`Yay! I guessed your number ${guess} in ${attempts} attempts!`);
      return;
    } else {
      alert("Invalid input. Please type 'h', 'l', or 'c'.");
    }
  }

  alert("Your responses were inconsistent. Please try again.");
}

startGame();


