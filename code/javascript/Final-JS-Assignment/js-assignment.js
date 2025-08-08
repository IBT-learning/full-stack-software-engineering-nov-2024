
//Challenge#1 

alert("Guess a number between 1 and 100!");

function guessWork() {
    let compAnswer = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    let userNumber;
    let counter=0;

    while (true) {
        userNumber = parseInt(prompt("Enter your guess:"), 10);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert("Invalid input! Please enter a number between 1 and 100.");
            continue; // Skip to the next iteration of the loop
        }

        if (userNumber === compAnswer) {
            alert(`Congratulations! You guessed the correct number, ${counter} times`);
            break; // Exit the loop
        } else if (userNumber > compAnswer) {
            alert("Too high! Try a lower number.");
            counter ++;
        } else {
            alert("Too low! Try a higher number.");
            counter ++;
        }
    
}
}

guessWork();


