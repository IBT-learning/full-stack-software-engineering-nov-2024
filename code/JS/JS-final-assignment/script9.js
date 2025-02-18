//  Game1 is the version of the game where the human choses a number and computer is guessesing that number
function game1() {
  // values for tracking game state
  let min = 1, max = 100;
  let attempts = 0;
  let gameRunning = true;
  let compGuess;

  alert(`Think of any number from ${min} (inclusive) to ${max} (inclusive) and I will try to guess it!`);

  while (gameRunning) {
    compGuess = Math.floor((min + max) / 2);
    attempts++;

    // get human response
    let humanAnswer = prompt(`My guess is ${compGuess} \n\nIs your number higher (H), lower (L) or is my guess it correct (C)? \n `);

    if (humanAnswer === null) {
      alert("Game cancelled.");
      return; 
    }

    // format human response (if it's not null)
    humanAnswer = humanAnswer.trimStart().trimEnd().toLowerCase();

    // process human response
    if(humanAnswer === 'c'){
      alert(`I found your number '${compGuess}' in ${attempts} attempts!`)
      gameRunning = false;
      }else if (humanAnswer === 'h'){
      min = compGuess + 1;
    }else if(humanAnswer === 'l'){
      max = compGuess - 1;
    }else{
      alert(`Please enter only: \n 'H' - if your number is higher than my guess! \n 'L' - if your number is lower than my guess! \n 'C' - if my guess is the same as your number!`)
      attempts--; //the user entered invalid input, so this attempt doesn't count. 
    }

    // prevent human cheating
    if (min > max) {
      alert("Something went wrong! Your responses may be inconsistent with the game rules.");
      gameRunning = false;
    }
  }
}

// game 2 is the version where the computer choses a number in a specific range and the human guesses that number
function game2() {
  // values for tracking game state
  let min = 20, max = 200;
  let compNumber = Math.floor(Math.random() * (max - min + 1)) + min; // min (inclusive) and max (inclusive)
  let attempts = 0;
  let gameRunning = true;

  alert(`I have chosen a number between ${min} (inclusive) and ${max} (inclusive). Try to guess it.`);

  while (gameRunning) {
    let humanGuess = prompt(`Enter your guess:\n My number is between ${min} (inclusive) and ${max} (inclusive)`);

    if (humanGuess === null) {
      alert("Game cancelled.");
      return; 
    }

    humanGuess = parseInt(humanGuess);
    if (isNaN(humanGuess) || humanGuess < min || humanGuess > max) {
      alert(`Please enter a valid number between ${min} (inclusive) and ${max} (inclusive).`);
      continue; 
    }

    attempts++;

    if (humanGuess === compNumber) {
      alert(`Well done! You found my number '${compNumber}' in ${attempts} attempts!`);
      gameRunning = false;
    } else if (humanGuess < compNumber) {
      alert(`Your guess is TOO LOW. Try again!`);
    } else {
      alert(`Your guess is TOO HIGH. Try again!`);
    }
  }
}


function mainMenu() {
  let playAgain = true;

  while (playAgain) {
    let choice = prompt("Which game do you want to play?\n  1: Computer guesses your number\n  2: You guess the computer's number\nType 1 or 2 to choose.");

    // process user choice
    choice = choice.trimStart().trimEnd();

    if (choice === "1") {
      game1();
    } else if (choice === "2") {
      game2();
    } else {
      alert("Invalid choice. Please enter 1 or 2.");
      continue;
    }

    playAgain = confirm("Do you want to play again?");
  }
}

mainMenu();