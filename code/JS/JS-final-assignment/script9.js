// Game1 is the version of the game where the human choses a number and computer is making guesses

function game1(){
  let wantToPlay = true;

  while(wantToPlay){
    // values for tracking game state
    let min = 50, max = 500; // going to reassign these based on human response, so use 'let'
    let compGuess;
    let attempts = 0;
    let gameRunning = true; // variable to stop the game

    // alert the human to think of a number between a minimum and maximum
    alert(`Think of any number between ${min} (inclusive) and ${max} (inclusive) and I will try to guess it!`);

    // comp to continue guessing until the correct number is found
    while (gameRunning) {
      // Calculate the next guess using binary search
      compGuess = Math.floor((min + max) / 2);
      attempts++;

      // get human response
      let humanAnswer = prompt(`My guess is ${compGuess} \n\nIs your number higher (H), lower (L) or is my guess it correct (C)? \n `);
      
      // format user input
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
        alert(`Please enter only 'H' if your number is higher than my guess! \n'L' if your number is lower than my guess! \n'C' if my guess is the same as your number!`)
        attempts--; //the user entered invalid input, so this attempt doesn't count. 
      }

      // Add validation to prevent human cheating
      if (min > max) {
        alert("Something went wrong. Your responses may be inconsistent.");
        gameRunning = false;
      }
    }

    // ask user if they want to play again
    wantToPlay = confirm('Do you want to play again?');

    if (!wantToPlay){
      alert('Thanks for playing');
    }
  }
}

game1();