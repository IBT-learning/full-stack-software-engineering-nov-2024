function guessTheNumber() {
    alert("Think of a number between 1 and 100, and I'll try to guess it!");

    let low = 1;
    let high = 100;
    let guess;
    let attempts = 0;

    while (low <= high) {
        guess = Math.floor((low + high) / 2);
        attempts++;

        let response = prompt(`Is the number higher (h), lower (l), or correct (c)? My guess: ${guess}`).toLowerCase();

        if (response === "c") {
            alert(`Yay! I guessed the number in ${attempts} attempts!`);
            break;
        } else if (response === "h") {
            low = guess + 1;
        } else if (response === "l") {
            high = guess - 1;
        } else {
            alert("Please enter 'h' for higher, 'l' for lower, or 'c' for correct.");
        }
    }

    let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (playAgain === "yes") {
        guessTheNumber();
    } else {
        alert("Thanks for playing!");
    }
}

guessTheNumber();
