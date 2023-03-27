### Express JS Rest APIs

#### Introduction to REST APIs
REST (Respresentation State Transfer ) APIs are a standard for building web APIs. ( Oka server nundi inko server madhaylo work ieyedhi APIs)
REST APIs use HTTP METHODS (e rest APIs mainly http methods use cheystam )
- GET 
- POST
- PUT
- DELETE
to interact with resources represented by URLs(Uniform Resource Indentifiers).

REST APIs can return data in different formats

- JSON - JavaScript Object Notation
- XML  - Extensible Markup Language
- HTML - Hyper Text Markup Language
- Byte Array - A byte array is simply a collection of bytes. 

  But JSON (JavaScript Object Notation ) is the most common format


  #### Instruction
 1. Initialize Project for Node Envronment
 ```
 npm init
 ```
 
 2. Install Express Package ( library)
 ```
 npm install express
 ```

 3. To Handle JSON Request/Response install 
    body-parser library   (// body-parser library work it converts JSON to express ) 
    (Body lo vachina data mothani JSON ki convert cheysi express ki provide cheystadhi Andhuke vetini MIDDLEWARES antaru ) 
    (Body parser lo yeno types of formats unatai)
```
npm intall body-parser  
```  
_In Express.js, you can handle JSON payload in you APIs by adding the `body-parser`
 middleware to your application. **The `body-parser` middleware allows you to parse JSON data in the request body**_

 4. Create Express Application 
 ``` javascript
 const express = require("express") // Ekkada manam express anney library require =  tesukoni , tesukuna library ni oka variable lo assgin cheysukuntham.
 const app = express();
 ```
 
 5. Apply `body-parser` middle ware to express app
 ``` javascript
 const bodyParser = require("body-parser")
 app.use(bodyParser.json());
 ```

 6. Create/Listen Server on specific PORT
 ```javascript
 //      First Method
 // app.listen(Port,OnServerStartHandler);
  app.listen( 3000, () => {} )

 // app.listen( 3000,function ( ) { } Or () => { } // call back function ) 

// Second Method
 
// app.listen(Port, OnServerHandler); or OnServerStart
   const SERVER_Port = 3000;
   const OnServerHandler = () => {
        console.log(`Server running on http://localhost:${SERVER_Port}`)
   }; // or = function () {  };

app.listen(SERVER_Port, OnServerHandler )
```

### Routing in ExpressJS

Route is a Specific endpoint in your application that defines the behavior for a particular URL.
 You can define routes using the `app.get()` method, which is used to handle HTTP GET requests
 ```javascript
 app.get('/', (request, response) => {
        response.send( "Hello, World" )
 });

 ``` 
 **GET** request  // GET method
 ```javascript

 // app.get('/',() => {} )
 //app.get(End_point,Handler (req,res) =>{
 //       res.json({Sucess:true})
 //    })

const USER_End_point ="/Users";
const ApiHAndler = (req,res) =>{
        res.json({Sucess : true})
};

app.get(USER_End_point,ApiHAndler);
```

**POST** request // POST Method
```javascript
const USER_End_point ="/Users";

app.post (USER_End_point,function (req,res) {

});
```

**PUT** request // PUT Method
```javascript
const USER_End_point ="/Users/:ID"; // ID is request param

app.post (USER_End_point,function (req,res) {
        const userID  = request.params.ID;
});
```

**DELETE** request // DELETE Method
```javascript
const USER_End_point ="/Users/:ID"; // ID is request param

app.post (USER_End_point,function (req,res) {
        const userID = request.params.ID;
});
```

