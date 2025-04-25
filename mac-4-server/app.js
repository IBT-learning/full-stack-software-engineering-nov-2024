import chalk from "chalk";

console.log(chalk.bold("hello"));

console.log("Welcome to Express");

console.log(chalk.bgYellowBright("Just have fun"));

console.log(chalk.red.bold.underline("hello", "world"));

const log = console.log;

log(chalk.blue("hello") + "world" + chalk.red("!"));
