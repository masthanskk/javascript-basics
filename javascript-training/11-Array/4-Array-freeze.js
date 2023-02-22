 let abc = 123;
 var xyz = 4567;
 const Word = 9876;

 abc = 112233;
 xyz = 4556677;
  // Word = 889769;  Here we can not reassign the value in constant variable.

 console.log(abc);
 console.log(xyz);
 console.log(Word);

 const list =[
        12,44, 33,22 ,55
 ]

 // list =[ 77,83,77,99,10 ];  We can't able to change the direct value of const variable.  
 
 list[2] = 77;

  console.log(list);


  // Now lets talk about freeze ( Means no one able to Modify the value of Object/array )

   const marks =[100,200,300];

   Object.freeze(marks);

   // marks[ marks.lenght -1 ] = 400;

   console.log(`Total marks = ` ,marks);
   // marks[0]= 300;   // ERROR:  Cannot assign to read only property '0' of object '[object Array]'  


   const values = Object.freeze([
        100,
        200,
        'Shami',
        true,
        [ 88,99,999,1299 ],
        { a: 1,b: 2, c: 3}
   ]);

  // values[2] ='Shaik' // Freeze only works on top Only.

   console.log(values);

   

     console.log(values[4].length); // 3
     console.log(( values.length - 1).length); // undefined

     values[4][1] = 100;
     console.log(values);

     values[5].a =200;
     console.log(values);

// freeze on inner in [],{} also

     const values = Object.freeze([
        100,
        200,
        'Shami',
        true,
       Object.freeze ([ 88,99,999,1299 ]),  // we can freeze inside the array also.
       Object.freeze ({ a: 1,b: 2, c: 3})   // we can freeze inside the object also.
   ]);
