// Function to start the game
function startGame() {
    let min = 1;
    let max = 100;
    let guess;
    let userResponse;

    alert("Welcome to the Guess the Number game!");
    alert("Think of a number between 1 and 100, and I will try to guess it!");

    while (true) {
        guess = Math.floor((min + max) / 2);
        userResponse = prompt(`Is your number higher than, lower than, or exactly ${guess}? (Enter "h" for higher, "l" for lower, "c" for correct)`);

        if (userResponse === 'h') {
            // If the guess is too low, adjust the minimum number
            min = guess + 1;
        } else if (userResponse === 'l') {
            // If the guess is too high, adjust the maximum number
            max = guess - 1;
        } else if (userResponse === 'c') {
            // If the guess is correct, end the game
            alert(`Yay! I guessed your number: ${guess}.`);
            break;
        } else {
            alert("Please enter a valid response: 'h', 'l', or 'c'.");
        }
    }
}

startGame();