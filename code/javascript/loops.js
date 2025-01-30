
let word = "antidisestablishmenarianism"

let count = 0

while (count < word.length) {
    count++ 
    console.log(`this loop happened ${count} times`)
}

let num = 0

while (num < 0.9) {
    num = Math.random()
    console.log(num)
}

// classic for loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 3; i <= 1000; i) {
    i = i ** 2
    console.log(i)
}

// for..of loop

for (letter of word) {
    console.log(letter)
}

const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

for (day of daysOfWeek) {
    if (day === "Wed") {
        console.log("Wednesday")
    } else if (day === "Sat") {
        console.log("Saturday")
    } else {
        console.log(`${day}day`)
    }
}

const vowels = "aeiou"

let justVowels = ""

for (letter of word) {
    for (v of vowels) {
        if (letter == v) {
            justVowels += letter
        }
    }
    console.log(justVowels)
}

for (let i = 0; i < 5; i++) {
    console.log("iteration " + i);
}

let sum = 0
while (sum < 5) {
    sum ++
    console.log(sum);
}

let add = 1
while (add < 5) {
    add += 2
    console.log(add);
}

for (let i = 2; i <= 100; i += 2 ) {
    console.log(i);
}

let i = 0
while(i <= 10) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++
}

const words = ["This", "is", "a", "sentence" ]
let sentence = ""

for (let word of words) {
    sentence += word + " "
}

console.log(sentence.trim());
