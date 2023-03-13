 const list =[ 45, 55, 85, 36, 29, 86];
 
 // 45+ 55+ 85+ 36+ 29+ 86 =?

 let Count = 0;
 let index = 0;
 while (index < list.length){
        const Current_amount = list[index]
        Count = Count+Current_amount;
        index++
 }
 console.log(`Sum of numbers using WHILE LOOP`, Count);

 let total1 = 0;
 
 for (let index = 0; index < list.length; index++) {
        const currentvalue = list[index];
        total1 = total1 + currentvalue;
 }
 console.log(`Sum of numbers Using FOR LOOP`, total1); 

 

 const Sumofnumbers = list.reduce( (firstvalue , secondvalue )=> {
    // firstvalue =  45, secondvalue = 55, ===> 100,
    // firstvalue =  100, secondvalue = 85, ===> 185,
    // firstvalue =  185, secondvalue = 36, ===> 121,
    // firstvalue =  221, secondvalue = 29, ===> 250,
    // firstvalue =  250, secondvalue = 86, ===> 336,
    
    return firstvalue + secondvalue;
 });

 console.log(`Sum of values using reduce method `, Sumofnumbers);

  
 //////////////

console.log(list);
 const sumofvalues = list.reduce( function (
       previousValue, 
       currentValue,
   //  currentIndex, 
   //  Orginalarray,
       
 ){  
     //  console.log('Previous Values = ', previousValue);
     //  console.log(`current Value = `, currentValue);
     //  console.log(`current Index = `, currentIndex);
     //   console.log(`Orginal Array = `, Orginalarray)

     return previousValue , currentValue
 
 })
 console.log('Sum of values using reduce method',sumofvalues);

 const students =[
       [25, 47, 28, 49 ,74, 97],  // 320
       [98, 24, 27, 84, 22, 18],  // 273
       [77, 84, 99, 84, 27, 55],  // 426
       [87, 56, 37, 27, 44, 66]   // 317

 ]
 const totalstudents =students.map(function(arrayvalue) {
       return arrayvalue.reduce((pre,curr) => pre+curr) 
 })

 console.log("-----------------------");
 console.log("Total Marks of students");
 console.log("-----------------------");
 console.log(totalstudents);

 console.log("-----------------------");
 console.log("Average Marks of students")
 console.log("------------------------");
 

 const averagestudents = totalstudents.map((value) => (value / 600) * 100);
 console.log(averagestudents);

 const convertToInteger = averagestudents.map(value => parseInt(value) + "%" );
 console.log(convertToInteger);

 const Above_280_students = averagestudents.filter((value) => {
       const valueInInterger = parseInt(value);
       return valueInInterger > 280 ;
 }); 
 console.log(Above_280_students);
