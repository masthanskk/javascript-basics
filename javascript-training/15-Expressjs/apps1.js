// Expressjs is frame work (external library)
// We need to download in from NPM registry 

// 1. npm init
// 2. npm install express
const fs = require("fs");
const express = require("express");
const bodyparser = require("body-parser");
const app = express()


// Define app to use bodyparser middleware
// Handling JSON payload requests
app.use = (bodyparser.json());
function getfiledata(path) {
        const data = fs.readFileSync(path);
        const json = JSON.parse(data);
        return json;
}

//const ProductsData  = fs.readFileSync("../14.node-server/data/products.json")
// const products      =  JSON.parse(ProductsData) 
// const products =  getfiledata("../14.node-server/data")

const Data_folder = "./data"
const products = getfiledata(`${Data_folder}/products.json`);
const categories = getfiledata(`${Data_folder}/categories.json`);



// first method
app.get("/", function (request, response) {
        response.send("Express is running On ")
});

// second method
app.get("/products", (request, response) => {
        response.json(products)
});

//third method //////
const handleCategories = function (request, response) {
        response.json(categories)
};
app.get("/categories", handleCategories);

/*practice
app.get("/categories",(request,response)=> {
response.json(categories)
})*/

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
})



/*
app.post("/categories",(request,response) => {
const categoryNames = `Category` + categories.length
console.log(categoryNames); // category 4
categories.push(categoryNames) 
response.send({success : true,newCategory : categoryNames })
})
*/


app.post("/add-category", (request, response) => {
        const requestbody = request.body; // {"category" : "NEW_category_NAME"}  
        const category = requestbody.category

        if (category) {
                // inserting New user provided category to categories array
                categories.push(category)

                response.send({
                        success: true,
                        message: `New ${category} added`,
                        count: categories.length

                })
        } else {
                response.send({
                        success: false,
                        error: `Please provide category name`
                })
        }
})




/*
app.get("/",() => {
const ProductID = request.param.productId
const product = products.find( product => product.id === parseInt(ProductID))
response.send(product)                   
})  */



app.listen(3000, () => {
        console.log(`server is running on http://localhost:3000`)
});