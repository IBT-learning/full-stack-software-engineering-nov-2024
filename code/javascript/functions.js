
function capitalize(word) {
    return word.toUpperCase();
}

console.log(capitalize("hello")); 

function percentCalc(amount, percentage) {
    return (amount * percentage) / 100;
}

console.log(percentCalc(200, 20));

function divisible(dividend, divisor) {
    return dividend % divisor === 0;
}

console.log(divisible(6, 3));
console.log(divisible(15, 4)); 

function greeting(firstName, status) {
    if (status === "friend") {
        return `Hello ${firstName}!`;
    } else if (status === "enemy") {
        return `Go away ${firstName}!`;
    } else {
        return `Who are you, ${firstName}?`;
    }
}

console.log(greeting("Superman", "friend")); // Output: Hello Superman!
console.log(greeting("Lex Luthor", "enemy")); // Output: Go away Lex Luthor!
console.log(greeting("John", "unknown")); // Output: Who are you, John?

