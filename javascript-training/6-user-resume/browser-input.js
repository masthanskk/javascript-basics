const readline = require('readline-sync');

//console.log('users ${Middle_name} Details!');
// This code runs in brower inpput.

const first_name = prompt('first_name');
const middle_name = prompt('middle_name');
const last_name = prompt('last_name');
const lable = prompt('Designation:');
const email = prompt('Email:');
const phone = prompt('phone:');
const url   = prompt('website:');

console.log(`users ${Middle-Name} Details!`);
const resume = {
    basics: {
        first_name    :first_name,
        Middle_name   :Middle_name,
        Last_name     :Last_name,
        Lable         :Lable,
        Email_name    :Email 
        Phone         :phone,
        Url           :Url
    }
}

console.log(resume)