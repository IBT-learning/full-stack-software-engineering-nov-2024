// Shorten Console.log
const cl = console.log;

// Challenge #4: Friend, Enemy

// Declare a function called greeting that takes in two arguments, firstName and status
function greeting (firstName, status) {
    
    // Within the function, check if the status is "friend"
    if (status === "friend") {
        // If true, return a a greeting
        return `Hello ${firstName}, my friend!`;
    } 
    else if (status === "enemy"){
        // If false, tell them to go awaay
        return `Hello ${firstName}, Please go away!`;
    }
    else{
        // Extra Challenge
        return `Hello ${firstName}, Sorry, I don't know you`;
    }
}

// Test the function with different names and statuses
cl(greeting("John", "friend"));