// ======================
// STRINGS SECTION
// ======================

const myName = "Henry Ogun"; // Replace with your name

// Log name length
console.log(`Name length: ${myName.length}`);

// Greeting template
console.log(`Hello, my name is ${myName}`);

// Shouting template
console.log(`When my friends see me they shout ${myName.toUpperCase()}!`);

// ======================
// NUMBERS SECTION
// ======================

// Challenge 1
const originalNumber = 42; // You can use any number here
const result = ((originalNumber * 2 + 8) / 2) - originalNumber;
console.log(`Challenge 1 result: ${result}`); // Should always be 4

// Challenge 2
const radius = 2; // Test with 2 or 3
const area = (Math.PI * radius ** 2).toFixed(4);
console.log(`Area with radius ${radius}: ${area}`);