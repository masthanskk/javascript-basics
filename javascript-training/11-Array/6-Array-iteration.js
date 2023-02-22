const names =[
        'Shami',
        'Lohith',
        'mani',
        'Ajay',
        'Mani',
        'Subhani',
        'Althaf',

        
]

  const nameslength =names.length;

// console.log(`Welcome ${names[0]}`);
// console.log(`Welcome ${names[1]}`);
// console.log(`Welcome ${names[2]}`);
// console.log(`Welcome ${names[3]}`);


// Iterating Array values using LOOPS
  let index = 0;
  while(index < nameslength) {            // While condition 0 < 4 = true,1 < 4 = true, 2 < 4 = true, 3 < 4 = true, 4 < 4 = false
        console.log(`Welcome ${names[index]}`);
        index++;  // index = index + 1;

};

 for (let i = 0; i< nameslength; i++){
 console.log(`Hi ${names[i]}`)
 }


 // Iterating Array values using ARRAY.method()
//                            // [].methodName()

// .forEach method
// [].forEach
// "".forEach (x)
// {}.forEach (x )

console.log(names);
console.log(typeof names); // typeof values always return "Object"

// How to identify the value is Array or not ?
// By using Array.isArray(value) will true/false

console.log(Array.isArray(names));
console.log(Array.isArray("Shami"));



 // Iterating Array values using ARRAY.method()
//                            // [].methodName()

// .forEach method
// [].forEach
// "".forEach (x)
// {}.forEach (x )

  function loopItems() {}

[].forEach( function() {}  );
[].forEach( () => {} );
[].forEach( loopItems); 

// [   0   ,    1   ,   2  ,  3   ,  4  ,    5     ,   6     ]
// ['Shami','Lohith','mani','Ajay','Mani','Subhani','Althaf',]
names.forEach(function (first,second,third) {
        console.log(`---------------------------`);
        console.log(`Im Iterating through forEach method`);
        console.log(`First Parameter = ${first}`); // first Parameter always refers to VALUE is array.
        console.log(`Second parameter =`, second); // Second Param  always refers to INDEX of value.
        console.log(`Third parameter = `,third); // Third param always refers to Original Array.
});

let Studentsmarks = [ 66, 77,34,87,96,44];
Studentsmarks.forEach((value)=>{
        console.log(`Marks for Students`, value)
});

     Studentsmarks.forEach((value,index)=>{
        console.log(`Index = ${index} | MARKS = ${value}`)
});


      function Iteratingmarks(v,i,arr){
        console.log(`Marks: ${v} at Index of ${i}`);
};
       Studentsmarks.forEach(Iteratingmarks);


       const loop = function (values){
        console.log(`Loop values ${values}`)
       };

       const Number =[ 10,20,30];
    Number.forEach(loop)