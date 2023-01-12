// function declaration way

function greetUser(username = `UNKNOWN`){
    console.log(`Welcome ${username}`);
}

 greetUser();
 
 greetUser("sHAMI");


// function expression way in Arrow function

 const welcomeuser = (username= `unknown user`) => {
    return `welcome to my page! ${username}`;
 }

 const WelcomeUSER=welcomeuser(`SHAMI`);
 console.log(WelcomeUSER);