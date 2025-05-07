function playComputerGuessesGame() {
    alert("Think of a number between 1 and 100. I’ll try to guess it!");
  
    let low = 1;
    let high = 100;
    let guess;
    let guessCount = 0;
    let response;
  
    while (low <= high) {
      guess = Math.floor((low + high) / 2);
      guessCount++;
      response = prompt(`Is your number higher (h), lower (l), or correct (c) compared to ${guess}?`).toLowerCase();
  
      if (response === 'c') {
        alert(`Yay! I guessed your number ${guess} in ${guessCount} tries.`);
        return;
      } else if (response === 'h') {
        low = guess + 1;
      } else if (response === 'l') {
        high = guess - 1;
      } else {
        alert("Invalid input! Please enter 'h' for higher, 'l' for lower, or 'c' for correct.");
        guessCount--; // Don't count invalid attempts
      }
    }
  
    alert("Something went wrong — are you sure you followed the rules?");
  }
  
  function startGame() {
    while (true) {
      playComputerGuessesGame();
      const playAgain = prompt("Do you want to play again? (y/n)").toLowerCase();
      if (playAgain !== 'y') {
        alert("Thanks for playing! Goodbye!");
        break;
      }
    }
  }
  
  startGame();
  