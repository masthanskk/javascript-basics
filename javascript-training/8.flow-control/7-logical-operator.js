/* 
    Comparision  Operators (return boolean)

1. ==
2. ===
3.<
4.<=
5.>
6.>=
7.!=
8.!==
 

     Logical operator AND,OR,NOT

     AND   -> &&

     OR    -> ||

     NOT   -> !

     12 > 8 -> true

*/
  
   // 12  >  8  === true
   // 12  &&  8  -> 8 = (true value) In AND operator, when operation it run the value one by one when it get last value true then shows true value.
                    //   In AND operator if their any False value it outcomes False (False value 0 ).
                    
     // true && flase
     // 1. false
     // False && true
     // 1. false
     // true && true
     // 1.true
     // false && false
     // 1.false
     // true && true && false
     // 1.false
     // true && false && true
     // 1.false
     // true && true && true
     // 1.true

     // AND Operator check all true value
     // 8 && 5 && 2 && 9 && 1 -> 1 ( && condition finds last for TRUTY value)


    console.log(`AND operator true && false`,true && false)
    console.log(`AND operator false && false`,false && false)
    console.log(`AND operator true && true`,true && true)
    console.log(`AND operator false && true`,false && true)

    console.log(`AND operator`,4 && 8 && 2 && 2)
    console.log(`AND operator`, 6 && 4 && 9 && 0 && 3); // here 0 is always a false value.
    console.log( 5>3 && 7>5 && 1<8); // it gets true value
//  console.log( true && true && true )

    console.log(5 >4 && 8>9 && 5<2 );
//  console.log( true && false && true)

 import readline from 'readline-sync';

 const UserAge = readline.questionInt(`Please enter your age`);
 const MINI_AGE = 18;
 const MAX_AGE = 45;

 if (UserAge >= MINI_AGE && UserAge <= MAX_AGE) {
    console.log(`You'r are allowed . .`);

    
 }else{
    console.log(`You'r not allowed. . .`);
 }

   ///////////////////////////////////////////////////////////////// 
    const fooditems = readline.questionInt(`Please enter FOOD BILL`);
    const FOODMINI_BILL = 555;
    const FOODMAX_BILL = 999;


if(fooditems >= FOODMINI_BILL && fooditems <= FOODMAX_BILL ){
    console.log(`Your bill as Generator`)

}else {
    console.log(`Your bill is not Generator`)
}


                             // OR

   // OR Operator it only checks for single true                          
   // 12  ||  8  -> 12 = (true value) In OR operator , when operation get true value in the first time it show true value. 

   

