//Challenge 1

const movieTitle = "Pitch Perfect"
const isScary = false
const isRomantic = true
const isFunny = true

if (isRomantic && isScary && !isFunny){
    console.log(`This ${movieTitle} is both romantic and scary`)
}
else if (!isScary && isRomantic || !isFunny) {
    console.log(`This ${movieTitle} is romantic`)
}

else if (isScary && !isRomantic ){
    console.log(`This ${movieTitle} is scary.`)
}

// Additional challenge
else if (isFunny && isRomantic && !isScary){
    console.log(`This ${movieTitle} is both romantic and funny`)
}
else {
    console.log(`This ${movieTitle} is neither romantic nor scary`)
}

