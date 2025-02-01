// Challenge 1 Capitalize

function capitalize(word){
    const upper = word.toUpperCase()
   return upper
   
    }
console.log(capitalize("bench"))


//Challenge 2 Percentage Calculator

function percentCalc(amount, percentage){
    let p = amount/100*percentage
    return p 
}
console.log(percentCalc(400, 60));


//Challenge 3 Divisible

function divisible(dividend, divisor){
    if (dividend%divisor === 0){
        return true
    }
    else {
        return false
    }
}
console.log(divisible(80,9));


// Challenge 4 Friend, Enemy

function greeting(FirstName, Status){
if(Status.includes("Friend")){
    return `Hello ${FirstName}!`
}
else if (Status.includes("Enemy")){
    return`Go Away ${FirstName}!`
}
else{
    return `Who are you ${FirstName}? Cos I don't really know you!`
}
}
console.log(greeting("Phoebe","aquintance"));