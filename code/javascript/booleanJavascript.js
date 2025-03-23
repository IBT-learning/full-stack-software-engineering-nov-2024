// Generate a random age between 1 and 100
const personAge = Math.floor(Math.random() * 100) + 1; 
console.log(`Person's age: ${personAge}`); // Log the age for testing

// Boolean expressions for age categories
const isAdult = personAge >= 18;
const isElderly = personAge >= 60;

// Template string to describe the person's status
const message = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`;
console.log(message);

// Conditional statement to classify the person's age group
if (personAge < 18) {
    console.log("This person is a child.");
} else if (personAge < 60) {
    console.log("This person is an adult.");
} else {
    console.log("This person is elderly.");
}
