
const startingNumber = 2;
let firstNumber = 1;
const lastNumber = 10;

while (firstNumber <= lastNumber) { // 1  <= 10;
    // Statement    
console.log(`${startingNumber} x ${firstNumber} = ${startingNumber * firstNumber}`);
        firstNumber++;

        
}

// After loop complete starting loop value is 11; // 11 <= 10 
console.log(`End of  loop  - firstNumber value is ${firstNumber} `)



const startNumber = 2;
let first_Number = 1;
let last_Number = 10;

while (firstNumber <= lastNumber) { // 1  <= 10) ;
    // Statement    
console.log(`${startNumber} x ${firstNumber} = ${startNumber * firstNumber}`);
firstNumber++;

        
}

// After loop complete starting loop value is 11; // 11 <= 10 
console.log(`End of  loop  - firstNumber value is ${firstNumber} `)


////////////////////////////////

// Define  1,2,3,4,5,6,7,8,9,10 tables

let starttable = 1;
let endtable =10;

while(starttable <= endtable){
    console.log(` Current table is ${starttable}`)

    let startnumber =1;
    const endnumber =10;
    while(startnumber<=endnumber){
        console.log(`${starttable} x ${startnumber} = ${starttable * startnumber } `);
        startnumber++;
    }
    console.log(`......................`)

    starttable++;
}