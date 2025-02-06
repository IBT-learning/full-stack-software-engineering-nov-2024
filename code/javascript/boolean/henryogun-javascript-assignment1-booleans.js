// Generate a random age between 0 and 100
const personAge = Math.floor(Math.random() * 101);

// Boolean expressions to determine age categories
const isAdult = personAge >= 18;
const isElderly = personAge >= 60;

// Template string showing the evaluation results
const evaluation = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`;

// Log the random age to verify our boolean evaluations
console.log(`Generated age: ${personAge}`);
console.log(evaluation);

// Extra challenge: Conditional statement to determine age category
if (personAge >= 60) {
    console.log("This person is elderly");
} else if (personAge >= 18) {
    console.log("This person is an adult");
} else {
    console.log("This person is a child");
}

// Test cases to verify our logic works correctly
const testCases = [
    5,  // Child
    25, // Adult
    75  // Elderly
];

console.log("\nTest Cases:");
testCases.forEach(age => {
    console.log(`\nTesting age: ${age}`);
    console.log(`Is adult? ${age >= 18}`);
    console.log(`Is elderly? ${age >= 60}`);
    
    if (age >= 60) {
        console.log("Category: Elderly");
    } else if (age >= 18) {
        console.log("Category: Adult");
    } else {
        console.log("Category: Child");
    }
});