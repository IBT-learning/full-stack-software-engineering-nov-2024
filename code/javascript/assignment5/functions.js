// challenge#1
function capitalize(word){
    return word.toUpperCase();
}
console.log(capitalize("David Stone"));//capitalize all letters
 





// challenge#2 :percentage calculators

function percentCalc(amount,percentage){
    percent= (percentage/100)*amount;
    return percent ;
}

console.log(percentCalc(200,20));



// // challenge#3: Divisible
;
function divisible(dividend,divisor){
    let divisible=(dividend % divisor == 0);
    return divisible;
      
}

console.log(divisible(6,3)); //true
console.log(divisible(15,4)); //false




// challenge#4: Friend , Enemy

function greeting(firstName, status){
    if(status==="friend"){
        return `Welcome ${firstName}`
    }
    if(status==="enemy"){
        return `Go away ${firstName}`;
    }
}

console.log(greeting("Superman","friend")) //Welcome Superman
console.log(greeting("Lex Author","enemy")) //go away Lex Luthor!





// Extra challenge


function greetingB(firstName, status){
    if( status=="friend"){
        return `Welcome, ${firstName}`;
    } else if( status=="enemy"){
        return `Go Away, ${firstName}`;
    } else {
        return `Invalid Input, ${firstName}`;
    }

}

console.log(greetingB("Salman","friend")) //Welcome Superman

console.log(greetingB("Stone cold","enemy")) //go away Lex Luthor!

console.log(greetingB("David Karanja","Running"))