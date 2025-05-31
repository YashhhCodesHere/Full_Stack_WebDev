import chalk from "chalk";
console.log(chalk.blue("Hello World!\n"));
const log = console.log;
const warning = chalk.hex("#8A3186")

log(`${warning('Wanna see your stats?')}
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);