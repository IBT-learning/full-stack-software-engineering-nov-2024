function initialPrompt() {
  alert(
    "Hi Welcome, \n This is the guessing game, Man vs Pc.. \n\t You pick the number, and I'll try to guess it, cool?"
  );
}

const gameReply = () => {
  console.log(" gameplay called");
  let choice = prompt("You just won the game, Do you wanna play again? (y/n");
  if (choice == "y" || choice == "Y") startGame();
  else {
    alert("Thank you for playing .. ");
  }
};

const startGame = () => {
  initialPrompt();
  let val = prompt(" Ok, You choose a number between 1 and 100");
  let finalReply = mainFunction(Number(val));
  gameReply(finalReply);
  console.log("Game End", val);
};
let range = [1, 100];
let numberOfGuesses = 0;
function mainFunction(chosenNumber) {
  if (!chosenNumber) {
    userDidntInputNumber();
    return 0;
  }
  let mediem = (range[0] + range[1]) / 2;
  const reply = secondaryPrompt(Math.floor(mediem));

  if (reply == "h" || reply == "H") {
    alert(" u replied h");
    range[0] = mediem;
    mainFunction(chosenNumber, range);
  } else if (reply == "l" || reply == "L") {
    alert(" u replied l");
    range[1] = mediem;
    mainFunction(chosenNumber, range);
    return "l";
  } else if (reply == "c" || reply == "C") {
    alert(" Yay, I Guessed the number on my " + numberOfGuesses + "th Guess !");
    gameReply();
    return "y";
  } else {
    alert(" sorry I couldn't understand, could you repeat that !");
    startGame();
    return;
  }
}
function userDidntInputNumber() {
  mainFunction(alert(" YOu did not enter a number , geez try again. ."));
}

function secondaryPrompt(mediem) {
  numberOfGuesses += 1;
  return prompt(
    `\n \t (reply h) If the number higher than ${mediem} , \n \t (reply l) If the number is lower than ${mediem} \t , or \n\t (Say C for correct) If the number is ${50} ✔🤗!`
  );
}

startGame();
