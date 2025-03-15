const movieTitle = "The Princess Bride";
const isScary = false;
const isRomantic = true;

if (isScary && isRomantic) {
    console.log(`${movieTitle} is both romantic and scary!`);
} else if (isRomantic) {
    console.log(`${movieTitle} is romantic`);
} else if (isScary) {
    console.log(`${movieTitle} is scary`);
} else {
    console.log(`${movieTitle} is neither romantic nor scary`);
}

// Challenge *

if (isScary) {
    if (isRomantic) {
        if (isFunny) {
            console.log(`${movieTitle} is scary, romantic, and funny!`);
        } else {
            console.log(`${movieTitle} is both romantic and scary!`);
        }
    } else if (isFunny) {
        console.log(`${movieTitle} is scary and funny`);
    } else {
        console.log(`${movieTitle} is scary`);
    }
} else {
    if (isRomantic) {
        if (isFunny) {
            console.log(`${movieTitle} is romantic and funny`);
        } else {
            console.log(`${movieTitle} is romantic`);
        }
    } else if (isFunny) {
        console.log(`${movieTitle} is funny`);
    } else {
        console.log(`${movieTitle} is neither romantic, scary nor funny`);
    }
}

