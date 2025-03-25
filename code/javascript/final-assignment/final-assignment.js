function startGame() {
    alert("Think of a number between 1 and 100 and I will try to guess it!");

    let lowerBound = 1;
    let upperBound = 100;
    let guess;
    let feedback;

    // Loop until the computer guesses the correct number
    while (true) {
    
        guess = Math.floor((lowerBound + upperBound) / 2);
        feedback = prompt(`Is your number higher than, lower than, or exactly ${guess}? (h/l/c)`).toLowerCase();
        if (feedback === 'h') {
            lowerBound = guess + 1;
        } else if (feedback === 'l') {
            upperBound = guess - 1;
        } else if (feedback === 'c') {
            alert(`I guessed your number! It was ${guess}.`);
            break;
        } else {
            alert("Please respond with 'h', 'l', or 'c'.");
        }
    }
}