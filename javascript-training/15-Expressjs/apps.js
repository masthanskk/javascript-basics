// Expressjs is frame work (external library)
// We need to download in from NPM registry 

// 1. npm init
// 2. npm install express

// const http = require("http")

const fs = require("fs");

const express = require("express");  // Taking express library.
const bodyParser = require("body-parser");
const { request } = require("http");

const app = express();  // function assgining to a constant varible.

// Define app to use bodyparser middleware

app.use(bodyParser.json());             // The Data must and should in Json not in Text,javascript,HTML,XML.

// Handling JSON payload requests

function getfiledata(path) {
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
app.get("/", (req, res) => {
       res.send('Express app is start..')
});

// Second method
app.get("/products", (req, res) => {
       res.json(products)
});

// Third method
const handleCategories = function (request, response) {
       response.json(categories)
};

/*practice
app.get("/categories",(request,response)=> {
response.json(categories)
})*/

app.get("/categories", handleCategories)

app.get("/products/:productID", (request, response) => {
       const productId = request.params.productID;
       const product = products.find(product => product.id === parseInt(productId));

       if (!product) {
              response.json({
                     error: true,
                     message: `No found product with Id ${productId}`
              })
       } else {
              response.json(product)
       }
});

/*  app.post("/categories", (req,res) => {

       const categoryName = 'category' + categories.length;  //  Adding array.length for Array
       // condition enti antey oka array ni increase cheysukovali category lo unna arrays 4 manaki ipudu 5 kavali So, e condition use cheysukuntham
       
       console.log(categoryName); // category 4
       categories.push(categoryName);

       console.log("Checking for Request body")
       console.log(req.body);
      
       res.send({Sucess: true, newcategory : categoryName})
}); */

app.post("/add-category", (req, res) => {
       const requestbody = request.body; // {} request body always return empty OBJECT.
       // {"category": "NEW_CATEGORY_NAME"}
       console.log('REQUEST BODY', requestbody)
       const category = requestbody.category;
       if (category) {
              // Inserting new user provided category to categories array
              categories.push(category);


              res.send({
                     Sucess: true,
                     Message: `New ${category} added`,
                     count: categories.length
              });
       } else {
              res.send({
                     Sucess: false,
                     error: `Please provide category name`
              })
       }

});
app.listen(3000, () => {
       console.log("Server listening on port http://localhost:3000 ")
})
