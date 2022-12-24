const readline = require("readline-sync");
console.log("Sub of Two Numbers");

const a = +readline.question("Please enter the vale of a: ");
const b = Number(readline.question("Please enter the value of b: "));
console.log(`value of ${a} is ${typeof a}`);
console.log(`value of ${b} is ${typeof b}`);
const sum = a-b;

console.log(`sum of ${a} sub ${b} = ${sum}`);