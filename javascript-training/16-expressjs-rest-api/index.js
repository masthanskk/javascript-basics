// Requring Express library.
const express = require("express");
const app = express();

// Here Applying body-parser middle ware to express app
const body_Parser = require("body-parser");
app.use(body_Parser.json());

// Creating a Server
const SERVER_Port = 3000;
const OnServerHandler = () => {
        console.log(`Server running on http://localhost:${SERVER_Port}`)
};
app.listen(SERVER_Port, OnServerHandler);

const END_POINT = "/Users"
const userslist = [];

// To Get list of all users
app.get(END_POINT, (req, res) => {
        res.json({
                 Sucess: true, 
                 method: "get",
                 users : userslist
                })
});

// To create a new User in application 

app.post(END_POINT, (req, res) => {
        const requestData = req.body;

   //     const name = requestData.name;
   //     const Email = requestData.Email;
   //     const contact = requestData.constact;
          const {name, Email, contact} = requestData ;

        const error = [];

    if(!name)    {
        error.push("Email address is required")
    }

    if(!Email) {
        error.push("Name is required")
    }

    if(!contact) {
        error.push("Contact number is required");
    }

    if (error.length > 0 ) {
       return  res.json({
                status: false,
                errors : error
        })
         
    }
        const newUser = {
                name: name,
                email : Email,
                Contact: contact,
                id : userslist.length + 1
        }
userslist.push(newUser)


        res.json({ 
                Sucess: true, 
                method: "post" ,
                data : newUser
        })
});

// To update existing user based on user id

app.put(`${END_POINT}/:id`, (req, res) => {
        const userID = req.params.id;
        res.json({ sucess: true, id: userID, method: "put" })
});

// To Delete existing  user based on user Id

app.delete(`${END_POINT}/:id`, (req, res) => {
        const userID = req.params.id;

// Check is user is available or not
const user = userslist.find( user => user.id === +userID) // Finding to delete an Object in array.

        if(!user) {
                return res.json({
                        Status : false,
                        Message : `User is not found with id ${userID}`
                });
        }

 // Array.splice(INDEX, LENGTH);
 const userIndex = userslist.findIndex( (user) => {user.id === +userID})
 userslist.splice(userIndex, 1)
        res.json({ 
                sucess: true,
                 id: userID,
                 index : userIndex,
                  method: "delete"
        
         })
});

 