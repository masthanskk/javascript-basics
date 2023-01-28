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
 
  //////////////////////////////////////////////////////

  const CLUB_PASSES = 8;
  let message1 ='';

  const RequiredPasses = readline.question(`No of passes ? `);

  message1 = RequiredPasses <= CLUB_PASSES ? `Club passes are CONFIRMED` : `Club passes are not CONFIRMED`;

  console.log(message1);


  /////////////////////////////////////////////////

  const HOTELROOMS_AVAILABLE = 3;
  let Outcomes_message =``;

  const AVAILABLE_ROOMS = readline.question(`No of rooms ? `);

  const Condition = AVAILABLE_ROOMS <= HOTELROOMS_AVAILABLE;
  const Truevalue = `Rooms are booked`;
  const Flasevalue = `Rooms are not booked`;
  const FinalResult = Condition ? Truevalue : Flasevalue;

  console.log(`Confirmed rooms ${FinalResult}`);

    