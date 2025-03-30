// let aler = alert("is the number high or low or c")

// console.log(aler)

// let prom = prompt("please enter your name");
// console.log(prom)

// if(prom === "hi"){
//     console.log("welcome brother");
// }

let midPoint = () => {
  let mid = Math.floor((low + high) / 2);
  return mid;
};

let low = 1;
let high = 100;

let numberOfGuesses = 0;
let chooseNumber = alert(`please choose a number from ${low} to ${high}`);

while (true) {
  console.log(midPoint());

  midPoint();

  let prom = prompt(
    `is the number h or l than ${midPoint()} or c. please enter h , l or c`
  );
  console.log(prom);
  if (prom === "h") {
    low = midPoint() + 1;
    midPoint();

    numberOfGuesses++;
  } else if (prom === "l") {
    high = midPoint() - 1;
    midPoint();
    numberOfGuesses++;
  } else if (prom === "c") {
    console.log("i got the right guess");
    numberOfGuesses++;

    break;
  }
}

console.log(` number of guesses are : ${numberOfGuesses}`);
