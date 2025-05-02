import chalk from "chalk";

console.log(chalk.bold("Server Assignment #1 - npm practice"));
console.log(chalk.blue("This text is blue"));
console.log(chalk.bgGreen.white("White text on green background"));
console.log(chalk.rgb(255, 136, 0).underline("Orange underlined text"));
console.log(chalk.red.bold("Danger!") + " " + chalk.green("Safe now"));
console.log(chalk.hex('#DEADED').italic("Spooky italic text"));
console.log(chalk.yellowBright("Bright yellow text"));
console.log(chalk.bgMagenta.black("Black text on magenta background"));
console.log(chalk.strikethrough("This is no longer relevant"));