const readline = require("readline-sync");


//"name" : "Shami",  // Single line comment.

/* 

"label" : "Program",                       // Multiple line comment..
"email" : "skmasthan.1999@gmail.com",
"Phone" : "8897692954",
"url" : "https://masthansk.com",
*/
 
console.log("**** Resume Maker **** ");

const name = readline.question("name : ");
const label = readline.question("Desgination : ");
const email = readline.question("Email: ");
const phone = readline.question("Mobile Number: ");
const url = readline.question("Url :");

const resume = {
    basics:{
        name:name,
        label:label,
        email:email,
        phone:phone,
        url:url
    }
}

console.log("user Details")
console.log(resume)