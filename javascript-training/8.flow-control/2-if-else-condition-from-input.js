 

 import readline from 'readline-sync';
 import chalk from 'chalk';



 const AVAILABLE_TICKETS = 10;
 const userRequiredtickets = readline.question(`Number of tickets booking ? `);

 if (userRequiredtickets <= AVAILABLE_TICKETS) {
    console.log(chalk.bgGreen(`Your tickets are confirmed`));
    
 } else {
console.log(chalk.bgRed(`Tickets are not Available`))
    
 }
