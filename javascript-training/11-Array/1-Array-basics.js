 // To define multiple values in memory we use array [ ] Square Brackets.
   

 /* 
 [
        value 1, // String
        value 2' // Number
        value 3' // Boolean
        value 4' // Null
        value 5, // []
        value 6, // {}
        value 7, // function() {}
        value 8, // () => {} // Arrow function
]

*/

 const Rammy ='Ramesh.V';
 const Students =['Lohith', 'Mani','Shami',Rammy];
 

 // Check how many values are represent in array ( .length property)
 // Ways to access property on Object 9here object is Array)
 // .(dot) notation
 // [] (Brackets)notation

  printTotalStudents();

 // Add new value to the end of Array (.push() method )

 Students.push('Rakesh'); // We can push single value.
 Students.push('Sharuf','Jayanth'); // We can also push multiple values.

 printTotalStudents();
 console.log(Students);
 

 // How to Access a value in array.
    // .(dot) notation (we can' t use dot notation on array because indexvlues are in number ) 
 // [] (Brackets)notation

console.log(Students[0]);
console.log(Students[1]);

console.log(`Total length of students are ${Students.length}`);

// Acess the last value of array by using array length -1  
console.log(Students[Students.length-1]);
// console.log( students[ 7-1 ] );
// console.log( students [ 6 ]);

Students [4] = "Varun,sid";
console.log(Students)

 // Helper function to get the total students in array
 function printTotalStudents(){
        console.log(`total number of students are ${Students.length}`);
 }
