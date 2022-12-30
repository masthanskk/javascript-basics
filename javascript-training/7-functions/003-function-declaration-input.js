   // Taking inputs from user.

   // const readline = require `readline-sync`

import readline  from "readline-sync";

const firstvalue = +readline.question("Please enter the vale of a: "); // string -> Number
const secondvalue = Number (readline.question("Please enter the value of b : "));// string -> Number

// Declaring a function.

function maths(valueone, valuetwo){
    console.log(`value of a = ${valueone}`);
    console.log(`value of b = ${valuetwo}`);

    const addition = valueone + valuetwo;
    const subtraction = valueone - valuetwo;
    const multiplication = valueone * valuetwo;
    const division = valueone / valuetwo;
    const module = valueone % valuetwo;


    console.log(`Addition of ${valueone} and ${valuetwo} is ${addition}`);
    console.log(`Subtraction of ${valueone} and ${valuetwo} is ${subtraction}`);
    console.log(`Multiplication of ${valueone} and ${valuetwo} is ${multiplication}`);
    console.log(`Division of ${valueone} and ${valuetwo} is ${division}`);
    console.log(`Module of ${valueone} and ${valuetwo} is ${module}`);


}
 maths(firstvalue,secondvalue);
 