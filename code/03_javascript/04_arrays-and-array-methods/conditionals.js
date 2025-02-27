const cl = console.log

// CONDITIONALS

// IF STATEMENT
if (1){

    // code clock
    cl("One is true")
}

if (0){
    cl("This is false")
}

if (1, "all", 2){
    cl("All true")
}

// Example
let temp = 24
let rainy = true

temp < 25 && rainy? cl("Oh! it's gonna be a rainy day") : sjdjd

cl("")

//Example 02
function scale (temp){
    if (temp > 100){
        cl("I'm Melting")
    }
    else if ( temp > 80){
        cl("It's Pretty Hot")
    }
    else if ( temp > 65){
        cl("It's Pretty Nice Out")
    }
    else if ( temp > 35){
        cl("At Least, It's Not Freezing")
    }
    else if ( temp > 15){
        cl("It's Cold Out")
    }
    else{
        cl("It's Way Too Cold")
    }
}

scale(60)

function testing (score){
    score > 69 ? cl("Grade A")
    : score > 64 ? cl("Grade B")
    : score > 49 ? cl("Grade C")
    : cl("Grade F")
}

testing(70)