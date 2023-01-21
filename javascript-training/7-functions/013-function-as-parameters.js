/* 

We develop our program (Solution) based on available Values

   // Primitive values

//  String
    Number
    Boolean
    Undefined
    Null


    Object{}  {key : value , key :value 2} it can be have string,Number,Boolean,undefined,Null,Object,Array,function.
    Array []  [value 1, value 2, value 3, {}, [], function() {} ] it can have be string,Number,Boolean,undefined,Null,Object,Array,function.

    function (value1,value2,value3,.... ) {} it can be have string,Number,Boolean,undefined,Null,Object,Array,function.



       function add(a,b,c){
            return a+b+c;
       }
         console.log(add(1,2,3));




        function multiply(x,y,z) {
            const total = x * y * z ;
            return{                      // or return total;
                total : total
            };
        }

        console.log(multiply(5,7,9));
        console.log(multiply); 


        function add(number1){
            return (number2)=>{
                return(number3) =>{
                    return number1+number2+number3; 
                }

            }
        }

                            */


 // add(12)(3)(4); // 19 ?
 
 function add(x){
    return function(y){
        return function (z){
            return x+y+z;
        }
    }
 }

var singlesline = add(10)(20)(30);
console.log(`Executing retrun function in one single line`,singlesline);
console.log(`Excuting return function in one single `,typeof  singlesline);

 var callOne = add(10);
 console.log(`Excuting return function in callone `,typeof  callOne);

 var calltwo = callOne(20);
 console.log(`Excuting return function in calltwo `,typeof  calltwo);

 var result = calltwo(30);
console.log(`Excuting return function in result `,typeof  result);

function welcome(name) {
    return `Welcome ${name}`;
}
console.log(welcome(`Shami`));





























