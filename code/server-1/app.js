console.log("I am just the best");
import chalk from "chalk"
console.log(chalk.bold("hello"))
console.log(chalk.blue.bgRed.bold('Hello world!'))
console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
    `);
    const error = chalk.bold.red;
    const warning = chalk.hex('#FFA500'); // Orange color
    
    console.log(error('Error!'));
    console.log(warning('Warning!'));