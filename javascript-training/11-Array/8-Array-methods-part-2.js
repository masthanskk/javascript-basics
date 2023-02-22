const students =[]

// Add value to the Array (below code will add value as a last item in array)
const value_return_from_push = students.push('Shaik');
console.log(value_return_from_push)

students[students.length] = 'Shami';
console.log(students);



// Add value at the begining of array
 const count = students.unshift('Masthan');
console.log(students);
console.log(count);

const Old_students = ['lohith','Mani','Ajay'];
const all_students = students.concat(Old_students);

console.log(students);
console.log(Old_students);
console.log(all_students);


// Convert Array values to String with separator by using.join()
const students_joined = all_students.join();
console.log(students_joined);
console.log(typeof students_joined);

const joined_with_slash = all_students.join(" | ");
console.log(joined_with_slash);

// [    0          1        2         3        4       5   ]
// [ 'Masthan', 'Shaik', 'Shami', 'lohith', 'Mani', 'Ajay' ]
const first_two_students   = all_students.slice(0, 2);  // ["Masthan", "Shaik"]
const java_students        = all_students.slice(2, 5);  // ['Shami', 'lohith', 'Mani']
const last_three_students  = all_students.slice(3);     // ['lohith', 'Mani', 'Ajay']


const Users = ['Lohith','Mani gundu','Lohith gundu',
'Ajay','Mani','Chandana','Vamsi','Pavan','Venky','Jayanth',
'Jahnavi','suppy'];

const total = Users.length;
console.log(Users);
console.log(`Total Number Of Students ${total}`);

const Last_Selected_students = Users.slice(-5);
console.log(Last_Selected_students);


const last_9_users = Users.slice(Users.length-9);
console.log(last_9_users);

console.log(all_students);

// [    0          1        2         3        4       5   ]
// [ 'Masthan', 'Shaik', 'Shami', 'lohith', 'Mani', 'Ajay' ]
// Find 'Shami' values index in array

const indexValuesofShami = all_students.indexOf('Shami');
console.log(indexValuesofShami);

console.log(all_students.indexOf('shami')); // -1 because shami and Shami both are different.

console.log(all_students.indexOf(`MASTHAN`));

/*                 0    1    2   3     4    5    6
const letters = [ 'a', 'b' ,'c' ,'x' ,'b' ,'a', 'c']
console.log(letters.indexOf('a') ); // 0
console.log(letters.indexOf('c') )  // 3
console.log(letters.lastindexOf('a') ) // 5
console.log(letters.lastindexOf('x') ) // 3
console.log(letters.lastindexOf('X') ) // -1
*/

   // Remove values from array ( This methods will modify Orginal array );  
   // .shift()  // return removed value
   // .pop()    // return removed value
   // .splice   // return removed array of values
console.log(all_students);
const first_student = all_students.shift(all_students);  // ( .Shift it works  delete first value in Array)

console.log(first_student);
console.log(all_students);

const last_students = all_students.pop();     // ( .pop it works to delete last value in Array )

console.log(all_students);      //      0        1         2        3
console.log(last_students);     // [ 'Shaik', 'Shami', 'lohith', 'Mani' ]

const Deleted_students = all_students.splice(2,1); // lohith   // ( .splice it works to delete selected values in array) 
console.log(Deleted_students);
console.log(all_students);     // [ 'Shaik', 'Shami', 'lohith', 'Mani' ]
 