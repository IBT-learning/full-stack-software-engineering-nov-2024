// SHORTENING CONSOLE.LOG SYNTAX
const cl = console.log


// Write a loop that will execute exactly 10 times. You can do this with either a while loop or a "classic" for loop
let i = 0

// Trying my hands on DO-WHILE Loop
// For each loop, console log whether the number is divisible by 3. (You can do this with modulo
do{
    i++
    if (i % 3 == 0){
        if (i === 3){
            cl(`The nummber ${i} is divisible by 3`)
        }
        else{
            cl(`The nummber ${i} is also divisible by 3`)
        }
    }
}
while(i < 10)