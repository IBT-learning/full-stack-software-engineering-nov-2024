// Movie information
const movieTitle = "Shaun of the Dead";
const isScary = true;
const isRomantic = true;
const isFunny = true;

// Function to classify movie type
function classifyMovie(title, scary, romantic, funny) {
    // First let's create a descriptive string that will be part of each output
    const movieDescription = `"${title}" is`;

    // Using nested conditionals to handle all combinations
    if (scary) {
        if (romantic) {
            if (funny) {
                console.log(`${movieDescription} a unique blend of romance, horror, and comedy!`);
            } else {
                console.log(`${movieDescription} both romantic and scary!`);
            }
        } else if (funny) {
            console.log(`${movieDescription} a horror-comedy!`);
        } else {
            console.log(`${movieDescription} scary`);
        }
    } else if (romantic) {
        if (funny) {
            console.log(`${movieDescription} a romantic comedy!`);
        } else {
            console.log(`${movieDescription} romantic`);
        }
    } else if (funny) {
        console.log(`${movieDescription} funny`);
    } else {
        console.log(`${movieDescription} neither romantic, scary, nor funny`);
    }
}

// Test the function with different combinations
console.log("Test Case 1: Shaun of the Dead (Scary, Romantic, and Funny)");
classifyMovie("Shaun of the Dead", true, true, true);

console.log("\nTest Case 2: The Notebook (Romantic only)");
classifyMovie("The Notebook", false, true, false);

console.log("\nTest Case 3: The Shining (Scary only)");
classifyMovie("The Shining", true, false, false);

console.log("\nTest Case 4: Airplane! (Funny only)");
classifyMovie("Airplane!", false, false, true);

console.log("\nTest Case 5: 12 Angry Men (None of the above)");
classifyMovie("12 Angry Men", false, false, false);

// You can test any combination by changing the boolean values:
console.log("\nCurrent Movie Classification:");
classifyMovie(movieTitle, isScary, isRomantic, isFunny);