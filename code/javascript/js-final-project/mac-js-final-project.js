function gamePlay() {
  alert("Think of a number between 1 and 100, and i will try to guess it!");

  let attempts = 0;
  let playing = true;
  let low = 1;
  let high = 100;

  while (playing) {
    let guess = Math.floor((low + high) / 2);
    let response = prompt(
      `Is the number higher (h), lower (l), or Correct (c)? My guess is ${guess}`
    );

    attempts++;

    if (response === "c") {
      alert(
        `I guessed it! The number was ${guess}. It took me ${attempts} tries.`
      );
      playing = confirm("Do you want to play again?");

      if (playing) {
        low = 1;
        high = 100;
        attempts = 0;
      }
    } else if (response === "h") {
      low = guess + 1;
    } else if (response === "l") {
      high = guess - 1;
    } else {
      alert(
        "Invalid input. Please enter 'h' for higher, 'l' for lower, 'c' for correct."
      );
    }
  }
  alert("Thanks for playing!");
}

gamePlay();
