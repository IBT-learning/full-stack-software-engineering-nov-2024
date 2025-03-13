// LOOPS
let cl = console.log

//While Loop
const word = "dissipate"
let count = 0

while (count < word.length){
    count ++
    cl(`This loop happened ${count} times`)
}

let num = 0
let count1 = 0
while (num < 0.9){
    num = Math.random()

    count1 ++
    cl(num)
    cl(`This loop happened ${count1} times`)
}

// For IN Loop
for (let numbers in word){
    cl(numbers)
}

// For OF Loop
// for (element of iterable){ //your code here}


for (let numbers of word){
    cl(numbers)
}

// Clasic For Loop
for (let i = 1; i < 20; i++){
    cl(i * 3)
}

// Loop with conditionals
const daysOfWeek = new Array("Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun")

for (let days1 of daysOfWeek){
    days1 === "Wed"? cl(`Wednesday`)
    : days1 === "Sat"? cl(`Saturday`)
    : cl(`${days1}day`)
}

// Loop with a loop in it (Nested Loop)
let allVowels = ""
const vowels = "aeiou"
for (let letter of word){
    for (let vowel of vowels){
        if (letter == vowel){
            allVowels += letter
            

        }
    }

}
cl(allVowels)

// for (let days in daysOfWeek){
//     cl(days, daysOfWeek[days])
// }
