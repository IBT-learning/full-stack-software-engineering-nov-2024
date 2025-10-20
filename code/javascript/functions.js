// Challenge 1: Capitalize

function capitalize(word){
    return word.toUpperCase();
}
console.log(capitalize("hello"))

// Challenge 2: Percentage Calculator
function percentCalc(amount, percentage){
    return (amount * percentage) / 100
}
console.log(percentCalc(200, 20))

// Challenge 3: Divisible
function divisible(dividend, divisor){
    return dividend % divisor === 0
}
console.log(divisible(6, 3))
console.log(divisible(15, 4))

// Challenge 4: Friend, Enemy
function greeting(firstName, status) {
    if (status === "friend"){
        return `Hello ${firstName}!`;
    } else if (status === "enemy"){
        return `Go away ${firstName}!`;
    } else {
        return `${firstName}, I don't think we have meet? `;
    }
}

console.log(greeting("Superman", "friend"))
console.log(greeting("Lex Luthor", "enemy"))
console.log(greeting("Josh", "family"))

