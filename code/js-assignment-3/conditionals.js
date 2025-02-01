const movieTitle = 'Fast and Furious';
const isScary = false;
const isRomantic = true;
const isFunny = true
const isAction = true
if (movieTitle === isRomantic) {
    console.log(`${movieTitle} a romantic movie`);
}else if (movieTitle === isScary) {
    console.log(`${movieTitle} a scary movie`);

}else if (movieTitle === isRomantic && movieTitle === isScary) {
    console.log(`${movieTitle} a romantic and scary movie`);
}else if (movieTitle !== isRomantic && movieTitle !== isScary) {
    console.log(`${movieTitle} not a romantic or scary movie`);
}else if (movieTitle === isFunny && movieTitle === isAction) {
    console.log(`${movieTitle} a funny and action movie`);
}
else{
    console.log("This is movie is not interested");
}

