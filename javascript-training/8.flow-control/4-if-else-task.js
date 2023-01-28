// Traffic Lights
/*

1.Green     -> (Vehicle an move / Go )
2.Yellow    -> (Vehicle can move but need to slow)
3.Red       -> (Vehicle should be stop)

*/

import readline from 'readline-sync';
import chalk from 'chalk';

const GREEN_LIGHT =`green`;
const YELLOW_LIGHT = `yelllow`;
const RED_LIGHT = `red`;


var currentlight = readline.question(`Currentlight ? `);
currentlight = currentlight.toLowerCase();
console.log(chalk.bgCyan(`Current Light is =${currentlight}`))

if (currentlight === GREEN_LIGHT) {  //   `ReD` === `Green`  -> flase
    console.log(chalk.bgGreen(`Go....`));

} else if
    (currentlight === RED_LIGHT) {//     `ReD` ===    `ReD`  ->  true
    console.log(chalk.bgRed(`Stop....`));

} else if (currentlight === YELLOW_LIGHT) {    //  `ReD` === `Yellow`  -> flase
    console.log(chalk.bgYellow(`Go....`));
 
}else {
    console.log(`Light values should be RED,YELLOW,GREEN`);
}
