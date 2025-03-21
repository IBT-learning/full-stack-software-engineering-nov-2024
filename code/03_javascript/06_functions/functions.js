const cl = console.log
// Strict Mode
"use strict"

/* Function Declarations:

 function functionName(optional, parameter){
     CodeBlock
 }

*/

function sayHello(word){
    cl(`Hello ${word}`)
}

sayHello("Ibukun") //Invoking the funnction
sayHello("Mareola") 
sayHello("Vanessa") 

function add(num1, num2, x){
if (x === undefined){
    let addition = num1 + num2
    cl(addition)
}
else{
    let value = num1 + num2 - x
    cl(value)
}

}

add(2, 4)

function subtract(num1, num2){
    return num1 - num2

}

cl(subtract(5, 1))


// THE OUTPUT OF A FUNCTITON IS FED TO VARIABLES
const newNum = subtract(5, 2)
const anotherNum = subtract(100, 50)
cl(newNum + anotherNum)

const aNum = subtract(3, 1) * subtract(100, 400)
cl(aNum)

// Output is used inside another function
cl(subtract(100, subtract(10, 20)))

//Function with three parameters
function introduction(name, location, hobby) {
    cl(`My name is ${name}, I live in ${location}, I like to ${hobby}.`)

}

introduction("Mareola", "New Orleans", "Code, and Make Music")

function clock(hour, minute){
    if (hour >= 12){
        let newHour = hour - 12
        cl(`${newHour}:${minute}PM`)
    }
    else{
        cl(`${hour}:${minute}AM`)
    }
}

for (let i = 0; i <=24; i++){
    for (let j = 0; j <= 60; j++ ){
        clock(i, j)
    }
}