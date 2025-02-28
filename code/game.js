function startGame() {
    alert("Think of a number between 1 and 100. I will try to guess it!");
    
    let min = 1;
    let max = 100;
    let guessing = true;

    while (guessing) {
        let guess = Math.floor((min + max) / 2);
        
        let response = prompt(
            `Is your number higher (h), lower (l), or correct (c)?\nMy guess is: ${guess}`
        ).toLowerCase();

        switch(response) {
            case 'h':
                min = guess + 1;
                break;
            case 'l':
                max = guess - 1;
                break;
            case 'c':
                alert("Great! I guessed your number!");
                guessing = false;
                break;
            default:
                alert("Please enter 'h', 'l', or 'c'");
        }

        if (min > max) {
            alert("You may have made a mistake in your responses.");
            guessing = false;
        }
    }
}

startGame();