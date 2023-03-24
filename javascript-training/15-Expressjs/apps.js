// Expressjs is frame work (external library)
// We need to download in from NPM registry 

// 1. npm init
// 2. npm install express

// const http = require("http")

const fs = require("fs");
 const express = require("express");  // Taking express library.
 const app = express();  // function assgining to a constant varible.

// Define app to use bodyparser middleware
// Handling JSON payload requests

 function getfiledata(path){
       const data = fs.readFileSync(path);
       const json = JSON.parse(data);
       return json;
 }

 // const productsData =fs.readFileSync('./data/products.json') // Buffer data
 // const product = JSON.parse(productsData);

// const Datafolder =  "../14-node-server/data"  // Taking (data) file from 14-node-server Directeory.
   const Datafolder = "./data" // Taking (data) file from OWN Directeory. 
   const products = getfiledata(`${Datafolder}/products.json`);
   const categories = getfiledata(`${Datafolder}/categories.json`)

 

// First method
app.get("/",(req,res) =>{                                  
       res.send('Express app is start..')
});

// Second method
app.get("/products",(req,res) =>{                         
       res.json(product)
});

// Third method
const handleCategories = function(request,response){       
       response.json(categories)
};

/*practice
app.get("/categories",(request,response)=> {
response.json(categories)
})*/

app.get("/categories",handleCategories)  

app.get( "/products/:productID",(request,response) => {
       const productId = request.params.productID;
       const product = products.find( product => product.id === parseInt( productId));
       
       if(!product) {
       response.json({
       error:true,
       message : `No found product with Id ${productId}`
       })
       }else{
       response.json(product)
       }
       })
       
       
       app.listen(3000,() => {
               console.log("Server listening on port http://localhost:3000 ")
        });
