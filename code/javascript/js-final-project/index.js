function playGame() {
  alert("Think of a number between 1 and 100. I will try to guess it!");
  let low = 1;
  let high = 100;
  let attempts = 0;
  let playing = true;

  while (playing) {
    let guess = Math.floor((low + high) / 2);
    let response = prompt(
      `Is the number higher (h), lower (l), or correct (c)? My guess: ${guess}`
    ).toLowerCase();
    attempts++;

    if (response === "h") {
      low = guess + 1;
    } else if (response === "l") {
      high = guess - 1;
    } else if (response === "c") {
      alert(`I guessed your number in ${attempts} attempts!`);
      playing = false;
    } else {
      alert(
        "Invalid input! Please enter 'h' for higher, 'l' for lower, or 'c' for correct."
      );
    }
  }

  let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
  if (playAgain === "yes") {
    playGame();
  } else {
    alert("Thanks for playing! Goodbye.");
  }
}

playGame();
