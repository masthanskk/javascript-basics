console.log("Hello world");
console.log(56 * 33);
console.log(true === false);

var a = 10; // Number
let b = "45"; // string
const c = true; // boolean

console.log(a+b+c);


/*  Two types of {} curly brackets. 
 1. {} is called as curly brackets it contains key = "value".
 2. {} is called blocks.


{
    key = "value"

}    */  



function myStatement(){
    var a = 10; // Number
let b = "45"; // string
const c = true; // boolean

console.log(a+b+c);
 
}

myStatement();

//() is called as parameters.


   

       /* const salary = 10000;
        const hike = salary + 5000; // 15000  */

function createUserDetails(userfirstName,userlastName,companyName,cityName){
    const User = {
        fisrtname:userfirstName,
        lastname:userlastName,
        company:companyName,
        city:cityName
    }
            return User;

             /* const salary = 10000;
        const hike = salary + 5000; // 15000  */


    }
        const newUser = createUserDetails("shami","shaik","infosys","Ongole");
        console.log(newUser);