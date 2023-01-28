// We should restrict User to enter Only Green,Red,Yellow.

import readline from 'readline-sync';
import chalk from 'chalk';

const GREEN = 1;
const YELLOW = 2;
const RED = 3;


// const userInput = readline.questionInt(`Select any one option for current light
// 1.Green
// 2.Red
// 3.Yellow
// `);

// Array index = [        0   ,  1  ,    2]
const COLOUR_OPTION = ['Green', 'Red', 'Yellow']

console.log(`color value Index :0 -> ${COLOUR_OPTION[0]}`);
console.log(`color value Index :1 -> ${COLOUR_OPTION[1]}`);
console.log(`color value Index: 2 ->${COLOUR_OPTION[2]}`);
console.log(`color value Index:-1 ->${COLOUR_OPTION[-1]}`)

const colorIndex = readline.keyInSelect(COLOUR_OPTION);
console.log(`User Input value ${colorIndex} = ${COLOUR_OPTION[colorIndex]}`);

if (colorIndex === GREEN) {
    console.log(chalk.bgGreen(`Go...`));

} else if (colorIndex === RED) {
    console.log(chalk.bgRed(`Stop ..`));

} else if (colorIndex === YELLOW) {
    console.log(chalk.bgYellow(`Go slow ...`));
}  

const SBI_BANK = 10;
const UNION_BANK = 6;
const ICICI_BANK = 5; 

const BANKS =['SBI_BANK','UNION_BANK','ICICI_BANK'];
console.log(`No of banks ${BANKS[10]}`);
console.log(`No of banks ${BANKS[6]}`);
console.log(`No of banks ${BANKS[5]}`);
console.log(`color value Index:-1 ->${BANKS[-1]}`);

const Bankdetails =readline.question(BANKS);

console.log(`User input values ${BANKS}=${BANKS[Bankdetails]}`);

if (Bankdetails === SBI_BANK){
    console.log(chalk.bgRed(`Blocked banks..`));

} else if (Bankdetails === UNION_BANK){
    console.log(chalk.bgGreen(`Running bank accounts..`));

}else if (Bankdetails === ICICI_BANK){
    console.log(chalk.bgYellowBright(`Retriving accounts..`));
}

