//  .methodName( ?Input)

 

 const students = []; // Create an empty array .


 // Add value to Array by using .push( VALUE ) method
 students.push( 'Shami' );

 // Add value to Array by using Array[ Array.length] = 'Shaik';
 students[students.length] = 'Shaik'; 

 console.log(students);

 function havingreturnValue() {
        return 100+300;
 }

 function fnwithoutReturn (){
        const total = 100 + 500 ;
 }


const Valueone = havingreturnValue();  // It will return value
const ValueTwo = fnwithoutReturn();; // It will return undefined because No return statement.

 console.log(`value of value ${Valueone}`);
 console.log(`Value of ValueTwo ${ValueTwo}`);

  

 [].forEach;
/*
(method) Array<never>.forEach(
        callbackfn: (value: never, index: number, array: never[]) => void,
         thisArg?: any
         ): void

  Performs the specified action for each element in an array.

  */
 [].map;

 /*(method) Array<never>.map<U>(
        callbackfn: (value: never, index: number, array: never[]) => U,
         thisArg?: any
         ): U[]

  Calls a defined callback function on each element of an array, and returns an array that contains the results.

 */

  const welcome_students_using_forEach = students.map((student) => {
        const messege = `Welcome ${student}`; 
        console.log(messege);
        return messege;
   });
   console.log(`Values using forEach`,welcome_students_using_forEach);



   const welcome_students_using_map = students.map((student) => {
        const messege = `Welcome ${student}`;
        console.log(messege);
        return messege;
   });
   console.log(`Values using map`,welcome_students_using_map);

   ///////////////////////// /////////////////////////////////////////////////////////
       
   // This is legisy code formation.

   const ShoppingPrice = [50 ,70, 80, 60, 110 ]; // Apply Discount of 10%.

   const discountPrices =[];
   const DISCOUNT_PERCENTAGE = 17;

   function applyDiscount (amount,DISCOUNT_PERCENTAGE = 17){
       // Discount formula : (VALUE * DISCOUNT ) / 100;

       const discount = (amount * DISCOUNT_PERCENTAGE) / 100;
      // const discountAmount = amount - discount ;
      // return discountAmount;
        
      return amount - discount;
   }

   for (let index = 0; index < ShoppingPrice.length; index++) {
       const value = ShoppingPrice[index];

       const discountamount = applyDiscount(value , DISCOUNT_PERCENTAGE);
       discountPrices.push(discountamount)
       } 

      // const map_using_single_statement = ShoppingPrice.map(value=> {
      //        return value -10;
     //  })

    //   const map_using_single_statement = ShoppingPrice.map(amount => amount - 10) 
                            //            = ShoppingPrice.map( amount => amount * amount) we can use operators +,-,*,% 

     const map_using_single_statement = ShoppingPrice.map(amount => applyDiscount(amount) ); 

   console.log(ShoppingPrice);
   console.log(discountPrices);
   console.log(map_using_single_statement);