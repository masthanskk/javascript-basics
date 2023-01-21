// Simple JavaScript Objects

const user = {
    firstname  : `Shami`,
    lastname : 'Shaik',
    City : 'ongole',
    worlLocation: 'Hyderabad',
    WFH : true,
    skills : ['css', 'javascript','html'],
    company : {
        companyname : 'AI',
        location : 'Bangalore'
    },

    Details : function(){
        console.log(`User Details : Shaik shami`);
    }
}

console.log(user);
console.log(`Data type of variable user is ${typeof user }`);

/* How to access object properties (keys)
   1. DOT Notation '.'
   2. Brackets Notation '[]' 


1. DOT Notation '.'
   
  console.log(user.City);  or console.log(`user City location ${user.City}`);

  */
 console.log(`User city info ${user.City}`);
 console.log(`User company info ${user.company} `);

 
 /* 2 Brackets Notation '[]'

 
console.log(user['City']); or console.log(`User city info via bracket Notation ${user[City]}`); 

    */

console.log(`User city info via bracket Notation user['City'] = ${user['City']}`);


 /*            Accessing Nested object properties -> '.' or '[]'
   
   1-way
   const companyLocation = user.company.location;
   console.log(`companyLocation by dot notation = ${companyLocation}`);

   2-way
   const companyLoc = user[`company`][`location`];
   console.log(`Company Location by bracket notation = ${companyLoc}`);

 */

   const companyLocation = user.company.location;
   console.log(`companyLocation by dot notation = ${companyLocation}`);

   const companyLoc = user[`company`][`location`];
   console.log(`Company Location by bracket notation = ${companyLoc}`);

   const Skills = user.skills;
   console.log(Skills);


       user.Details();