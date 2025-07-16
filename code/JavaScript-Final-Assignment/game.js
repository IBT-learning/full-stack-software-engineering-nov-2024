let min = 1;
let max = 100;
let currentGuess = 0;
let attempts = 0;
let gameActive = false;
let waitingForResponse = false;

function makeGuess() {
  currentGuess = Math.floor((min + max) / 2);
  attempts++;

  document.getElementById(
    "messageDisplay"
  ).textContent = `Your number is ${currentGuess}`;

  document.getElementById("attemptsCount").textContent = attempts;
  return currentGuess;
}

function getResponse(guess) {
  if (guess === undefined) {
    return null;
  }
  return prompt(
    `Is your number higher(h), lower(l), or exactly ${currentGuess}
  `
  );
}

function updateGuessRange(response, guess) {
  if (response === "h") {
    min = guess + 1;
  } else if (response === "l") {
    max = guess - 1;
  }
}

function reply(response) {
  if (response === null) {
    alert("Game cancelled.");
    gameActive = false;
    waitingForResponse = false;
    return;
  }

  response = response.toLowerCase();

  if (response === "h" || response === "l") {
    updateGuessRange(response, currentGuess);
    playGame();
  } else if (response === "c") {
    alert(`Yay! I guessed your number in ${attempts} attempts!`);
    gameActive = false;
    waitingForResponse = false;
  } else {
    alert("Invalid input. Please enter h, l, or c.");
    playGame();
  }
}

function playGame() {
  if (attempts >= 7) {
    alert("You've exceeded the max number of attempts(7).Game Over!");
    gameActive = false;
    return;
  }

  let guess = makeGuess();
  let response = getResponse(guess);
  reply(response);
}

function startGame() {
  min = 1;
  max = 100;
  attempts = 0;
  gameActive = true;
  waitingForResponse = true;
  alert("Think of a number between 1 and 100. I'll try to guess it.");
  playGame();
}
