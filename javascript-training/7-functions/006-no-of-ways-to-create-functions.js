

// 1.function Expression
function add (a,b){ return a+b;}

// 2.function Declaration.

const subtrction = function (a,b){
    return a - b;
}


// 3.Arrow function (ES6 latest runing Version (ES6 - > EcmaScript 6) ) Arrow function treated as Expression function 

const Multiplication = (a,b) =>{
    return a * b;
}

                                  // `45` and `78` are Values
                                  // or also known as passing arguments to add function

 const addition = add(24,44);
 console.log(`Addition value is ${addition}`);
 
// Parameters( Varibles defined in functions)
// Arguments (Are actual vales pass to the functions)

 const multiply = Multiplication(34,77);
 console.log(`Multply values is ${multiply}`);

 const subtract = subtrction(550,29);
 console.log(`Subtractions values are ${subtract}`);

// what happend if we dont pass arguments.

const Noarguments = add();
console.log(`Actual values are ${Noarguments}`);