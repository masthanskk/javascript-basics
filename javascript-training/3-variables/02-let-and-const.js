// before ES6 version, there is only one way to create
// variable in javascript is using var keyword
var myVariable = "Some data";

// In ES6 version, let and const are introduce to create
// variables

// var declaration with value 
var myName = "shami";

// var redeclaration with same variable identifier
var myName = "masthan";


// let declaration with value
var myHometown = "Ongole";

// we can't redeclare let variable again
// let myHometown = "Hyderabad"; // Javascript will throw error


// But we can reassign new value to var or let
myName = "masthan";
myHometown = "Hyderabad";


// for var and let we can reassign values (remove old vaue and update new value)
// We can't reassign const value
const DOB = "29/01/1999"
