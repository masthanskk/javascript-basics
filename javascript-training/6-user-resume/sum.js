const readline = require("readline-sync");
console.log("Sum of Two Numbers");


// Convert value to number
// 1.Number(values)
// 2.+value
// like ->1. Number(values)-> const a = Number(readline.question("Please enter the value of a: "));
                                
                                       // OR

// like ->2. +value -> const a = +readline.question("Please enter the value of a: ");

const a = +readline.question("Please enter the vale of a: ");
const b = Number(readline.question("Please enter the value of b: "));
console.log(`value of ${a} is ${typeof a}`);
console.log(`value of ${b} is ${typeof b}`);
const sum = a+b;

console.log(`sum of ${a} plus ${b} = ${sum}`);