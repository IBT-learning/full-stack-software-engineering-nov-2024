// Game object with all functionality
const game = {
    mode: null,
    computerGuess: {
        low: 1,
        high: 100,
        currentGuess: null,
        guessCount: 0,
        isPlaying: false
    },
    playerGuesss: {
        secretNumber: null,
        min: 1,
        max: 100,
        guessCount: 0,
        isPlaying: false
    },
    
    // Initialize the game with selected mode
    init: function(mode) {
        this.mode = mode;
        
        // Update UI to show selected mode
        document.getElementById('modeDisplay').textContent = mode === 'computer' ? 'Computer Guesses' : 'You Guess';
        document.getElementById('gameStatus').textContent = 'Playing';
        document.getElementById('gameStatus').className = 'game-status playing';
        
        if (mode === 'computer') {
            this.startComputerGuessing();
        } else if (mode === 'player') {
            this.startPlayerGuessing();
        }
        
        // Update guess count display
        this.updateGuessCount();
    },
    
    // Start computer guessing mode
    startComputerGuessing: function() {
        this.computerGuess.low = 1;
        this.computerGuess.high = 100;
        this.computerGuess.guessCount = 0;
        this.computerGuess.isPlaying = true;
        
        // Show computer controls, hide player controls
        document.getElementById('computerControls').style.display = 'block';
        document.getElementById('playerControls').style.display = 'none';
        
        this.updateOutput("Think of a number between 1 and 100.<br>I'll try to guess it!<br>Click the buttons to tell me if my guess is higher, lower, or correct.");
        this.makeComputerGuess();
    },
    
    // Make a computer guess
    makeComputerGuess: function() {
        if (!this.computerGuess.isPlaying) return;
        
        this.computerGuess.currentGuess = Math.floor((this.computerGuess.low + this.computerGuess.high) / 2);
        this.computerGuess.guessCount++;
        this.updateGuessCount();
        
        const message = `My guess #${this.computerGuess.guessCount}: Is your number <strong>${this.computerGuess.currentGuess}</strong>?<br>Tell me if your number is higher, lower, or if I'm correct!`;
        this.updateOutput(message);
    },
    
    // Process the user's response in computer guessing mode
    processComputerResponse: function(response) {
        if (!this.computerGuess.isPlaying) return;
        
        response = response.toLowerCase().trim();
        
        if (!['h', 'l', 'c'].includes(response)) {
            this.updateOutput("Invalid input! Please use the buttons: Higher, Lower, or Correct.");
            return;
        }
        
        if (response === 'c') {
            this.computerGuess.isPlaying = false;
            document.getElementById('gameStatus').textContent = 'Game Over';
            document.getElementById('gameStatus').className = 'game-status not-playing';
            
            const message = `I guessed your number <strong>${this.computerGuess.currentGuess}</strong> in ${this.computerGuess.guessCount} tries!<br>Select a new game mode to play again.`;
            this.updateOutput(message);
            this.disableComputerButtons();
            return;
        }
        
        if (response === 'h') {
            if (this.computerGuess.currentGuess >= this.computerGuess.high) {
                this.updateOutput(`That can't be right! Your number can't be higher than ${this.computerGuess.high}. Let's try again.`);
                this.computerGuess.guessCount--;
            } else {
                this.computerGuess.low = this.computerGuess.currentGuess + 1;
            }
        } else if (response === 'l') {
            if (this.computerGuess.currentGuess <= this.computerGuess.low) {
                this.updateOutput(`That can't be right! Your number can't be lower than ${this.computerGuess.low}. Let's try again.`);
                this.computerGuess.guessCount--;
            } else {
                this.computerGuess.high = this.computerGuess.currentGuess - 1;
            }
        }
        
        this.updateGuessCount();
        
        if (this.computerGuess.low > this.computerGuess.high) {
            this.computerGuess.isPlaying = false;
            document.getElementById('gameStatus').textContent = 'Game Over';
            document.getElementById('gameStatus').className = 'game-status not-playing';
            this.updateOutput("Hmm, something's wrong with your answers. Let's start over!<br>Select a new game mode to play again.");
            this.disableComputerButtons();
            return;
        }
        
        this.makeComputerGuess();
    },
    
    // Disable computer response buttons after game ends
    disableComputerButtons: function() {
        const buttons = document.querySelectorAll('.response-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
        });
    },
    
    // Start player guessing mode
    startPlayerGuessing: function() {
        this.playerGuesss.secretNumber = Math.floor(Math.random() * 100) + 1;
        this.playerGuesss.guessCount = 0;
        this.playerGuesss.min = 1;
        this.playerGuesss.max = 100;
        this.playerGuesss.isPlaying = true;
        
        // Show player controls, hide computer controls
        document.getElementById('playerControls').style.display = 'flex';
        document.getElementById('computerControls').style.display = 'none';
        
        // Enable input and button
        document.getElementById('guessInput').disabled = false;
        document.getElementById('submitGuess').disabled = false;
        
        this.updateOutput(`I've picked a secret number between 1 and 100.<br>Try to guess it! Enter your first guess below.`);
        this.updateGuessCount();
    },
    
    // Process player's guess
    processPlayerGuess: function(guess) {
        if (!this.playerGuesss.isPlaying) return;
        
        this.playerGuesss.guessCount++;
        this.updateGuessCount();
        
        if (guess === this.playerGuesss.secretNumber) {
            this.playerGuesss.isPlaying = false;
            document.getElementById('gameStatus').textContent = 'Game Over';
            document.getElementById('gameStatus').className = 'game-status not-playing';
            
            const message = `Congratulations! You guessed the number <strong>${guess}</strong> in ${this.playerGuesss.guessCount} tries!<br>Select a new game mode to play again.`;
            this.updateOutput(message);
            
            // Disable input and button
            document.getElementById('guessInput').disabled = true;
            document.getElementById('submitGuess').disabled = true;
            return;
        }
        
        if (guess < this.playerGuesss.secretNumber) {
            this.playerGuesss.min = Math.max(this.playerGuesss.min, guess + 1);
            this.updateOutput(`Higher! Your guess <strong>${guess}</strong> is too low.<br>The number is between ${this.playerGuesss.min} and ${this.playerGuesss.max}. Try again!`);
        } else {
            this.playerGuesss.max = Math.min(this.playerGuesss.max, guess - 1);
            this.updateOutput(`Lower! Your guess <strong>${guess}</strong> is too high.<br>The number is between ${this.playerGuesss.min} and ${this.playerGuesss.max}. Try again!`);
        }
        
        // Clear the input field
        document.getElementById('guessInput').value = '';
        document.getElementById('guessInput').focus();
    },
    
    // Update the output display
    updateOutput: function(message) {
        document.getElementById('output').innerHTML = message;
    },
    
    // Update the guess count display
    updateGuessCount: function() {
        const count = this.mode === 'computer' ? 
            this.computerGuess.guessCount : 
            this.playerGuesss.guessCount;
        document.getElementById('guessCount').textContent = count;
    }
};

// Start game with selected mode
function startGame(mode) {
    // Reset UI elements
    document.getElementById('output').innerHTML = '';
    document.getElementById('guessCount').textContent = '0';
    
    // Enable all buttons
    const buttons = document.querySelectorAll('.response-btn');
    buttons.forEach(btn => {
        btn.disabled = false;
    });
    
    // Enable player input
    document.getElementById('guessInput').disabled = false;
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').value = '';
    
    // Start the game
    game.init(mode);
}

// Handle response in computer guessing mode
function handleResponse(response) {
    game.processComputerResponse(response);
}

// Submit player's guess
function submitPlayerGuess() {
    const input = document.getElementById('guessInput');
    const guess = parseInt(input.value, 10);
    
    if (isNaN(guess)) {
        game.updateOutput("Please enter a valid number between 1 and 100!");
        input.value = '';
        input.focus();
        return;
    }
    
    if (guess < 1 || guess > 100) {
        game.updateOutput(`Please enter a number between 1 and 100!`);
        input.value = '';
        input.focus();
        return;
    }
    
    game.processPlayerGuess(guess);
}

// Allow pressing Enter to submit guess in player mode
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('guessInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            submitPlayerGuess();
        }
    });
    
    // Initialize the game with some default text
    game.updateOutput("Select a game mode to begin. In 'Computer Guesses' mode, think of a number between 1-100 and the computer will try to guess it. In 'You Guess' mode, you'll try to guess the computer's secret number.");
});