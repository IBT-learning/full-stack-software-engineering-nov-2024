// Game configuration
const CONFIG = {
    MIN_NUMBER: 1,
    MAX_NUMBER: 100,
    VALID_RESPONSES: ['h', 'l', 'c'],
    GAME_MODES: {
        COMPUTER_GUESSES: '1',
        PLAYER_GUESSES: '2'
    }
};

class NumberGuessingGame {
    constructor() {
        this.stats = {
            gamesPlayed: 0,
            totalGuesses: 0
        };
    }

    // Initialize a new game session
    start() {
        this.displayWelcomeMessage();
        let continuePlaying = true;

        while (continuePlaying) {
            const gameMode = this.selectGameMode();
            
            if (gameMode === CONFIG.GAME_MODES.COMPUTER_GUESSES) {
                this.playComputerGuessingGame();
            } else if (gameMode === CONFIG.GAME_MODES.PLAYER_GUESSES) {
                this.playPlayerGuessingGame();
            }

            continuePlaying = this.askToPlayAgain();
        }

        this.displayFinalStats();
    }

    // Display welcome message and game instructions
    displayWelcomeMessage() {
        alert(
            "Welcome to the Number Guessing Game!\n\n" +
            "Game Modes:\n" +
            "1. Computer guesses your number\n" +
            "2. You guess computer's number\n\n" +
            `Numbers range from ${CONFIG.MIN_NUMBER} to ${CONFIG.MAX_NUMBER}`
        );
    }

    // Get game mode selection from player
    selectGameMode() {
        let mode;
        do {
            mode = prompt(
                "Select game mode:\n" +
                "1: Computer guesses your number\n" +
                "2: You guess computer's number"
            );
        } while (!this.isValidGameMode(mode));
        return mode;
    }

    // Validate game mode selection
    isValidGameMode(mode) {
        return Object.values(CONFIG.GAME_MODES).includes(mode);
    }

    // Computer guessing game implementation
    playComputerGuessingGame() {
        alert(`Think of a number between ${CONFIG.MIN_NUMBER} and ${CONFIG.MAX_NUMBER}`);
        
        let min = CONFIG.MIN_NUMBER;
        let max = CONFIG.MAX_NUMBER;
        let guessCount = 0;
        let gameComplete = false;

        while (!gameComplete) {
            const guess = Math.floor((min + max) / 2);
            guessCount++;

            const response = this.getPlayerResponse(guess);

            if (response === 'c') {
                this.handleCorrectGuess(guessCount);
                gameComplete = true;
            } else if (response === 'h') {
                min = guess + 1;
            } else if (response === 'l') {
                max = guess - 1;
            }

            // Detect if player might be cheating
            if (min > max) {
                alert("Hmm... Your responses seem inconsistent. Let's start over!");
                return this.playComputerGuessingGame();
            }
        }
    }

    // Get and validate player's response to computer's guess
    getPlayerResponse(guess) {
        let response;
        do {
            response = prompt(
                `Is your number higher (h), lower (l), or correct (c)?\n` +
                `Computer's guess: ${guess}`
            )?.toLowerCase();
        } while (!CONFIG.VALID_RESPONSES.includes(response));
        return response;
    }

    // Player guessing game implementation
    playPlayerGuessingGame() {
        const targetNumber = Math.floor(Math.random() * CONFIG.MAX_NUMBER) + CONFIG.MIN_NUMBER;
        let guessCount = 0;
        let correctGuess = false;

        alert(`I've chosen a number between ${CONFIG.MIN_NUMBER} and ${CONFIG.MAX_NUMBER}. Try to guess it!`);

        while (!correctGuess) {
            const guess = this.getPlayerGuess();
            guessCount++;

            if (guess === targetNumber) {
                this.handleCorrectGuess(guessCount);
                correctGuess = true;
            } else {
                alert(
                    `${guess} is too ${guess < targetNumber ? 'low' : 'high'}!\n` +
                    `Guesses made: ${guessCount}`
                );
            }
        }
    }

    // Get and validate player's numerical guess
    getPlayerGuess() {
        let guess;
        do {
            guess = parseInt(prompt("Enter your guess:"));
        } while (
            isNaN(guess) || 
            guess < CONFIG.MIN_NUMBER || 
            guess > CONFIG.MAX_NUMBER
        );
        return guess;
    }

    // Handle correct guess scenarios
    handleCorrectGuess(guessCount) {
        alert(`Correct! It took ${guessCount} guesses.`);
        this.stats.gamesPlayed++;
        this.stats.totalGuesses += guessCount;
    }

    // Ask if player wants to play another round
    askToPlayAgain() {
        return confirm("Would you like to play again?");
    }

    // Display final game statistics
    displayFinalStats() {
        if (this.stats.gamesPlayed > 0) {
            const avgGuesses = (this.stats.totalGuesses / this.stats.gamesPlayed).toFixed(1);
            alert(
                `Thanks for playing!\n\n` +
                `Games played: ${this.stats.gamesPlayed}\n` +
                `Average guesses per game: ${avgGuesses}`
            );
        }
    }
}

// Create and start the game
const game = new NumberGuessingGame();
game.start();