// Challenge one
function capitalize(word){
    return word.toUpperCase()
}

capitalize("hello world") // HELLO

// challenge 2
function percntCalc(amount, percentage){
    return amount * (percentage / 100)
}

console.log(percntCalc(100, 10)) // 10

// Challenge 3
function divisible(dividen, divisor){
    if(dividen % divisor === 0){
        return true
    }else{
        return false
    }
}

console.log(divisible(11, 5)) // true

// challenge 4
function geeting(firstName, status){
    if (status === "friend"){
        return `Welcome, ${firstName}!`
    }else if (status === "enemy"){
        return `Go away, ${firstName}!`
    }else{
        return `Hello, ${firstName}!`
    }
}
console.log(geeting("John", "bot")) // Hello, John!