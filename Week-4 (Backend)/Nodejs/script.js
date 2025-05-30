import chalk from "chalk";
console.log(chalk.blue("Hello World!"));
const log = console.log;
const warning = chalk.hex("#8A3186")

log(`
CPU: ${warning('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);