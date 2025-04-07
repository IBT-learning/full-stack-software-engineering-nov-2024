// Challenge 1
const capitalize = (word) => {
    return String(word).toUpperCase()
}


// Challenge 2
const percentCalc = (amount,percentage) => {
    return percentage/100 *amount;
}


// Challenge 3
const divisble = (dividend, divisor) => {
    return dividend % divisor === 0 
}

// Challenge 4
const greeting = (firstName, status) => {
    let message = ""
    
    if (status === "friend"){
        message = "Hello " + firstName
    }
    else if (status === "enemy"){
        message = "Go Away " + firstName
    }
    else {
        message = "Who are you?"
    }

  return message
}


