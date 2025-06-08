// Constant variable personAge
const personAge = 25;

// Determine if the person is an adult
const isAdult = personAge >= 18;

// Determine if the person is elderly
const isElderly = personAge >= 60;

// Create a template string
const description = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`;

// Log the result
console.log(description);

// Extra Challenge: Randomize personAge
const randomAge = Math.floor(Math.random() * 101); // Random age between 0 and 100
console.log(`Random age: ${randomAge}`);

// Update variables for randomAge
const isAdultRandom = randomAge >= 18;
const isElderlyRandom = randomAge >= 60;
console.log(`Is this person an adult? ${isAdultRandom}. Is this person elderly? ${isElderlyRandom}.`);

// Conditional statement for randomAge
if (randomAge < 18) {
  console.log("This person is a child.");
} else if (randomAge >= 60) {
  console.log("This person is elderly.");
} else {
  console.log("This person is an adult.");
}
