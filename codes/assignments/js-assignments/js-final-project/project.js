 playGame = () => {
    alert("Think of a number between 1 and 100, and I'll try to guess it!");
    
    let min = 1;
    let max = 100;
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
        let guess = Math.floor((min + max) / 2);
        let reply = prompt(`Guess ${attempts}/${maxAttempts}: Is your number higher than, lower than, or exactly ${guess}? (h = Higher than, l= Lower than, e = exactly)`).toLowerCase();

        if (reply === 'e') {
            alert(`I guessed it right! Your number was ${guess}. It took me ${attempts + 1} tries.`);
            return;
        } else if (reply === 'h') {
            min = guess + 1;
        } else if (reply === 'l') {
            max = guess - 1;
        } else {
            alert("Invalid response. Please enter 'h' for higher, 'l' for lower, or 'e' for exactly.");
            attempts--;   //Don't count this as a guess.
        }

        attempts++;

        if (min > max) {
            alert("Something went wrong. Did you change your number? Let's try again.");
            return;
        }
    }
    
    if (attempts >= maxAttempts) {
        alert("I've run out of guesses! You win this round.");

        // Try to narrow down what the number might have been

        if (min === max) {
            alert(`The number must be ${min}.`);
          } else {
            alert(`The number must be between ${min} and ${max}.`);
          }
    }
    
    let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (playAgain === 'yes') {
        playGame();
    } else {
        alert("Thanks for playing! Goodbye.");
    }
}

playGame();
