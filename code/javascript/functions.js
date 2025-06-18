function capitalize(word) {
    return word.toUpperCase();
}
console.log(capitalize("hello"));

// Challenge 2
function percentCalc(amount, percentage) {
    return (amount * percentage) / 100;
}
console.log(percentCalc(200, 20));

// Challenge 3
function divisible(dividend, divisor) {
    if (dividend % divisor === 0) {
        return "true";
    } else {
        return "false";
    }
}
console.log(divisible(6, 3));
console.log(divisible(15, 4));

// Challenge 4
function greeting(firstName, status) {
    if (status === "friend") {
        return `Hello ${firstName}!`;
    } else if (status === "enemy") {
        return `Go away ${firstName}!`;
    } else {
        return `Ahh!!! ${firstName}!`;
    }
}   
console.log(greeting("superman", "friend"));
console.log(greeting("Lex Luthor", "enemy"));
console.log(greeting("Intruder", "neutral"));
