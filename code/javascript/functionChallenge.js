//CHALLENGE ONE : CAPITALIZE
function capitalize (word) {
    return (word.toUpperCase())
}
console.log(capitalize("hello"));

//CHALLENGE TWO:PERCENTAGE CALCULATOR
function percentCalc(amount,percentage){
    return (amount * percentage)/100
}
console.log(percentCalc(200,20));

//CHALLENGE THREE: DIVISIBLE
function divisible (dividend, divisor){
    if(dividend % divisor ===0){
        return("true");
    }
    else{return("false");
    }
}console.log(divisible(6,3));
console.log(divisible(15,4));
//CHALLENGE FOUR: FRIEND, ENEMY
function greeting(firstName, status){
    if(status == "friend"){
        return(`hello ${firstName}`)
    }else if (status =="enemy"){
        return(`Go away ${firstName}`)
    }else {return("I am not sure where to place you STRANGER!")}
}
console.log(greeting("Sherifah", "friend"));
console.log(greeting("Kelvin", "enemy"));
console.log(greeting("weirdo"))



