// Ticket Bookings

import readline from 'readline-sync' ;

//const readline = require (`readline-sync`)

const numberofticketsrequired = 10;
console.log(`Train tickets are ${numberofticketsrequired}`);

const tickets = 5;
const canbuytickets = tickets <= numberofticketsrequired;


// 1. can buy tickets -> true  -> Your tickets are confirmed.
// 2. can buy tickets -> false -> Tickets are not Available.

let messege = '';




if(canbuytickets) {
    messege = `Your tickets are confirmed`
    
} else {
    messege = `Tickets are not Available`
    
}
console.log(messege);