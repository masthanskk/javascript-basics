
/* A function is a piece of code that can be called during the lifecycle of the app to perform a task or return a value. 
A function declaration can be broken down into the following pieces.

- Name.
- Parameters. A list of inputs that can be passed into a function.
- Body. The logic or statements that perform the computation. 

*/

/* 
1.A function declaration on its own does not do anything. 
2.You make use of functions by calling them. 
3.The return value of the function can be assigned to a variable.

- Function call. Executes the code inside the function body.
- Arguments. The values are to be used as parameters in the function.
- Return value. By default, functions will return undefined but can return the result of computation when the body contains a return statement. */


// Function declaration is starts with name.

  function mathOperations (a,b ){   // Here a,b are parameters
    console.log(`value a = ${a}`);
    console.log(`value b = ${b}`);
    const addition = a+b; 
    const subtraction = a-b;
    const multiplication = a*b;
    const division =a/b;
    const module = a%b;
  

    console.log(addition);
    console.log(subtraction);
    console.log(multiplication);
    console.log(division);
    console.log(module);

  }
  
  // invoking / calling declaration function
   // we are not passing any arguments.
   console.log("calling mathoperations function with no arguments")
   mathOperations();

   console.log("calling function with one argument");
   mathOperations(15);

   console.log("calling function with two arguments");
   mathOperations(35,55);


  
