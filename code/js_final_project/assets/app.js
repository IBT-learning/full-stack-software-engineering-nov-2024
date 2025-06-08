//get all Dom elements
const userGuessInput = document.getElementById('user-guess');
const submitBtn = document.getElementById('submit-guess');
const restartBtn = document.getElementById('restart-game');
const gameMessage = document.getElementById('message');
const attemptMessage = document.getElementById('attempts');
const gameImagExpression = document.getElementById('game-img')


//generate random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number: ${randomNumber}`);

//initialize attempts
let attempts = 0;   
let maxAttempts = 5;

//function to compare user guess with random number

function compareGuess(userGuess) {
    if (userGuess > randomNumber) {

        gameMessage.textContent = `Your guess is too high, you guessed ${userGuess}`;
        gameImagExpression.src = './assets/img/guessWrongLadyFace.jpg';

    } else if (userGuess < randomNumber) {

        gameMessage.textContent = `Your guess is too low. You guessed ${userGuess}`;
        gameMessage.style.color = 'red';
        gameImagExpression.src = './assets/img/tooLowGuess.jpg';
    } else {

        gameMessage.textContent = `Congratulations! You guessed the number right! ${randomNumber}`;
        gameImagExpression.src = './assets/img/guessCorrectLadyFace.jpg';
    }
}


// Function to check if the user's guess is valid
function checkGuess(userGuess) {
    if (isNaN(userGuess) || userGuess === '') {

        gameMessage.textContent = `❌ Please enter a valid number!.`;
        gameMessage.style.color = 'red';
        gameImagExpression.src = './assets/img/InvalidGuess.jpg';

        return false;
    }

    if (userGuess < 1) {

        gameMessage.textContent = '🚫 Please enter a number greater than 0!';
        gameImagExpression.src = './assets/img/guessWrongLadyFace.jpg';
        attemptMessage.textContent = `Attempts: ${attempts}`;
        return false;

    } else if (userGuess > 100) {

        gameMessage.textContent = '⚠️ Number is too high, it should be 100 or lower!';
        gameImagExpression.src = './assets/img/guessWrongLadyFace.jpg';
        return false;

    } 

    return true;
}

//Event listener for submit button
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let userGuess = parseInt(userGuessInput.value);

    if (!checkGuess(userGuess)) {
        return; // Do not proceed if guess is invalid
    }

    attempts++; // Increase attempts only for valid guesses
    attemptMessage.textContent = `Attempts: ${attempts}/${maxAttempts}`;
    compareGuess(userGuess);

    if (attempts >= maxAttempts) {
        gameMessage.textContent = `Game Over! You've exhausted ${maxAttempts} attempts. The number was ${randomNumber}`;
        gameImagExpression.src = './assets/img/guessWrongLadyFace.jpg';
        submitBtn.disabled = true; // Disable button after max attempts
    }

});     

//Event listener for restart button
restartBtn.addEventListener('click', function() {
    attempts = 0;
    attemptMessage.textContent = 'Attempts: 0';
    gameMessage.textContent = '';
    userGuessInput.value = ''; 
    gameImagExpression.src = 'assets/images/start.png';
    randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(randomNumber);
})