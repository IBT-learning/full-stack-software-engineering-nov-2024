// Shorten Console.log
const cl = console.log;

// Challenge #2: Percentage Calculator

// Declare a function called percentCalc that takes two arguments, amount and percentage
const percentCalc = (amount, percentage) => {

    // Within the function, calculate the percentage of the amount
    let percent = (amount * percentage) / 100;
    
    // Return the calculated percentage
    return percent;
}

console.log(percentCalc(200, 20))