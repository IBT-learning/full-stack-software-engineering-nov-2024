function sayHello() {
    console.log("hello");
}

sayHello()

function greeting(personName) {
    console.log(`hello ${personName}`)
}

greeting("wonder")
greeting("Jade")
greeting("Cilla")
greeting(["Benjamin", "Yadel", "Taiwo"])

function add(num1, num2) {
    console.log(num1 + num2)
}

add(5, 4)

function subtract(num1, num2) {
    return num1 - num2
}
console.log(subtract(1, 2))

const newNumber = subtract(55, 23)
const anotherNumber = subtract(12, 5)

console.log(newNumber + anotherNumber)

const newNum = subtract(3, 4) * subtract(5, 0) + (10, 1)
console.log(newNum);

console.log(subtract(100, subtract(50, 10)));


function introduction(name, location, hobby) {
   console.log (
       `Hello, my name is ${name}, I live in ${location} and I like to ${hobby}`
   )
   return "this is the return value"
}

console.log(introduction(1, 2, 3));

introduction("Mary", "Tennessee", "play video games")
introduction("Kira", "Riga", "make costumes")

function clock(hour, minute) {
    // TODO: handle 0 hours
    // TODO: handle single digit minutes
    // TODO: handle am/pm for 12
    if (hour > 24 || hour < 0) {
        return "That is not a valid hour"
    }
    if (minute >= 60 || minute < 0) {
       return "That is not a valid minute" 
    }
    
    let amPm = "am"
    if (hour > 12) {
        hour = hour - 12
        amPm = "pm"
    }
    return(`${hour}:${minute} ${amPm}`);
}

console.log(clock(0, -5))
 
for (let hour = 1; hour <= 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        console.log(clock(hour, minute))
     }
 }
