 
 
 //[].push(VALUE);
 //[].splice(INDEX, END_INDEX);



/*

 [].forEach;
 [].map;
 [].filter;
 [].reduce;
 [].some;
 [].find;

*/
 
// .....................    Array.forEach()      ............

const marks = [ 24, 33, 55, 43, 77, 62 ];

function doubleMarks(marksvalue) {
        const value = marksvalue * 2;
      console.log(value);
  //      return value
}

// marks.forEach( (value, index, Orginalarray) => {} )
// marks.forEach( function (value, index) {} )
const forEach_values = marks.forEach(doubleMarks);
console.log(`ForEach values`,forEach_values);


//...................................................
const Price = [ 100,120,123,130,440];

function Pricelist(price){
        const amount = price * 3;
        console.log(amount)
        return amount;
}

const Finall_amount =Price.forEach(Pricelist);
console.log(Finall_amount);

//................................................


// ................    Array.map()     ...........

const class_ = [ 24, 33, 55, 4, 77, 62 ];

// function Pricelist ()

 const map_values = class_.map(Pricelist); 
 console.log(map_values);

 //...... Easy method

 const numbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const total = numbers.map(hi =>  hi*2)
 console.log(total);

 const Group = [ 15, 22 ];
 const Totalgroup = Group.map(value => value * 2);
 console.log(Totalgroup); 

 // ....................   Array.filter()    .....................

 const number =[1,2,3,4,5,6,7,8,9,10];
 const Odd_numbers = number.filter(value => value * 2 === 0);

 const numberss =[1,2,3,4,5,6,7,8,9,10];
 const Even_numbers = numberss.filter(value => value * 2 !== 0);
 
 console.log(Odd_numbers);
 console.log(Even_numbers);

 const a_letter_user = ['Shami','varun','lohith','MAni','Ayay'];
 const letter_change = a_letter_user.filter(value => value[0] === 'S');
 console.log(letter_change);