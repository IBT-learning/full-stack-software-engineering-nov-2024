let temperature = 110
let rainy = false

let isWarmAndWet = temperature >= 70 && rainy

let isDryandCold = !rainy && temperature < 65

if (temperature < 65 && rainy) {
    console.log("Danny is grumpy!");
} else if (isWarmAndWet || isDryandCold) {
    console.log("Danny is okay");
} else {
    console.log("Danny is happy!");
}

if (temperature > 100) {
    console.log ("I'm melting!")
} else if (temperature > 80) {
    console.log("it is pretty nice out!")
} else if (temperature > 65) {
    console.log("at least it's not freezing")
} else if (temperature > 35) {
    console.log("at least it's not freezing")
} else if (temperature > 15) {
    console.log("it's cold out!")
} else {
    console.log("IT IS WAY WAY TOO COLD")
}