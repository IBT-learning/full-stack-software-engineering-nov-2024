// Shorten Console.log
const cl = console.log;

// Challenge #3: Divisible

// Declare a function called divisible that takes two argments, dividend and divisor
function divisible(dividend, divisor) {
    
    // Within the function, check if the dividend is divisible by the divisor
    let isDivisible = dividend % divisor === 0;
    
    // Return true if divisible, false otherwise
    return isDivisible;
}

cl(divisible(6, 3))

cl(divisible(15, 4))