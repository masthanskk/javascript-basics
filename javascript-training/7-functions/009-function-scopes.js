 
 // Global Scope
 const fullname = `Shaik shami`;

 function printDetails(){
    //function scope
    const city = `guntur`;

    console.log({
        name:fullname,
        city:city,

    })
 }


 //Invoking function
 printDetails();
 console.log(`Fullname = ${fullname}`);
 console.log(`City = ${city}`);
