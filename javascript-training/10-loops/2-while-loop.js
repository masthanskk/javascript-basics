import readline from 'readline-sync';
import chalk from 'chalk';



let CurrentValue = readline.questionInt("Which Table you want to Generate ? =");
let Startvalue =1;
let endvalue = readline.questionInt("Please Define your end number = ");

while (Startvalue <= endvalue) {
        console.log(` ${CurrentValue} X ${Startvalue} = ${CurrentValue * Startvalue}`);

       // Startvalue = Startvalue +1;
        
       Startvalue++;
}


//////////////////////////////////   OR   ///////////////////////////////

let CurrentNumber = readline.questionInt("Which Table you want to Generate ? =");
let StartNumber =1;
let EndNumber = readline.questionInt("Please Define your end number = ");

while (StartNumber <= EndNumber) {
        const total = CurrentNumber * StartNumber;
        const Statement = `${CurrentNumber} x ${StartNumber} = ${total}`;
  
console.log(Statement);
StartNumber = StartNumber+1;

// Start++;
        
}