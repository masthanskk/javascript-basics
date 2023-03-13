import readline from 'readline-sync';

let username = readline.question(`Please enter your name ? `)
let city = readline.question('Please enter your city ? ');

console.log(username , city);