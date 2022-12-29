//const chalk = require("chalk");

import chalk from 'chalk'; //es6

console.log("Welcome to");
console.log("Javascript.");

console.log( chalk.blue("Function topic in") );
console.log( chalk.red ("Javascript functions.") );

// ESS|ES6 (type: "module")
  
function myownproject() {
    console.log("one");
    console.log("two");
    console.log("three");


}
 myownproject();

 // Addition
 
function addition( persononeHari,persontwovinay){
    console.log("Calling addition function");

    console.log(chalk.blue( persononeHari) );
    console.log(chalk.red( persontwovinay) );

    const output = persononeHari + persontwovinay;
    console.log(chalk.bgGreenBright(output) );

}

addition(12,55);
addition(56,99);

// Subtraction 


function Subtraction(valueOne,valuetwo) {
    console.log("calling Subtraction function");
    console.log(chalk.blue(valueOne) );
    console.log(chalk.red(valuetwo) );

    const output = valueOne-valuetwo;
    console.log(output);
    
}
Subtraction(200,66);

// Multiplication

function Multiplication(valueOne,valuetwo){
    console.log( "Calling Multiplication function");
    console.log(chalk.bgBlack(valueOne) );
    console.log(chalk.bgBlackBright(valuetwo) );

    const output = valueOne*valuetwo;
    console.log(output);

}
 Multiplication(36,76)

 // Division
  function Division(Firstvalue,Secondvale){

  
    console.log("Calling Division function");
    console.log(chalk.bgBlue(Firstvalue) );
    console.log(chalk.bgBlack(Secondvale) );

    const output = Firstvalue / Secondvale;
    console.log(output);
  }

  Division( 66,78 );

  // Modular
   function Modular(firstvalue , secondvalue){
    console.log("calling modular function");
    console.log(chalk.blue(firstvalue) );
    console.log(chalk.red(secondvalue));

    const output = firstvalue%secondvalue;
    console.log(output);


   }
   Modular( 33,65);