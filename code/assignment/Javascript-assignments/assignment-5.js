
// Challenge #1: Capitalize
// Declare a function called capitalize that takes one argument, word
// Within the function, capitalize the word
// Return the capitalized word
// When you run console.log(capitalize("hello")) you should get HELLO

const capitalize = (word) => {
    return word.toUpperCase()
}
console.log(capitalize("hello"))


// Challenge #2: Percentage Calculator
// Declare a function called percentCalc that takes two arguments, amount and percentage
// Return the given percentage of the amount
// When you run console.log(percentCalc(200, 20)) you should get 40

const percentCalc = (amount, percentage) => {
    percentage = percentage / 100
    return amount * percentage
}
console.log(percentCalc(200, 20))


function divisibe(dividend, divisor){
    if(dividend % divisor == 0)
        return 'true'
    else {
        return 'false'
    }
}
console.log(divisibe(6, 3))
console.log(divisibe(15, 4))


function greeting(firstName, status) {
    if(status == 'friend'){
        return `Hello ${firstName}`
    }else if(status == 'enemy'){
        return `Go away ${firstName}`
    } else if(status != 'friend' || status != 'enemy'){
        return `You don't belong anywhere in my life ${firstName}`
    }
}
console.log(greeting("Superman", "friend"))
console.log(greeting("Lex Luthor", "enemy"))
console.log(greeting("Obioha", "stranger"))