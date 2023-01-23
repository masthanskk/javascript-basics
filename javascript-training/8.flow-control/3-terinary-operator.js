//       Terinary Operator.


/*
   Here is normal if/else flow

if (condition) {
    
} else {
    
}

   */
  import readline from 'readline-sync';

  const AVAILABLE_TICKETS = 25;

  let message ='';
  const Requiretickets = readline.question(`No of tickets ? `);

  /*
  if (Requiretickets <= AVAILABLE_TICKETS) {
    messege = `Ticket Booked`;
  }
   else{
    messege = 'Ticket not Booked';

  }
 */ 

  // condition ? trueBlock : falseBlock

  message = Requiretickets <= AVAILABLE_TICKETS ? 'Ticket are Booked' : 'Ticked not Booked'

  //                         OR

  const condition = Requiretickets <= AVAILABLE_TICKETS;
  const truemessage = 'Ticket are Booked';
  const flasemessage = 'Ticked not Booked';

  const Anothermessage = condition ? truemessage :flasemessage;

  console.log(`Message value = ${message}`);
  console.log(`Another value = ${Anothermessage}`);

    