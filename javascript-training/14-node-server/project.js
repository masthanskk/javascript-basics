const http =require("http");
const fs = require("fs");

const categories =fs.readFileSync('data/categories.json') // Collecting a Data from data floder ( /categories.json)
const products = fs.readFileSync('data/products.json')     // Buffer Data
// readline-sync    => user inputs
// chalk            => output colors
// Express JS       => To create Server application

// categories   => CATEGORIES_DATA
// products     => PRODUCTS_DATA

function serverlistener(request,response){
        console.log(`Server Requested URL: `, request.url);   // Requesting to web url.

     const REQUESTED_URL = request.url;
     
     if(REQUESTED_URL === '/products'){  // 
        response.end(products);
     }else if (REQUESTED_URL === '/categories'){
        response.end(categories)
     }else {

            if(REQUESTED_URL.includes("/products/")) {
               // /products/5 => ["","product","5"]

               const paths = REQUESTED_URL.split("/"); // ["","product","5"]
               const productId = paths[paths.length -1]
               console.log("Product ID:", productId);
               const productList = JSON.parse(products);

               // Here productId is String
               // product.id == productId

               // String to Number
               // 1. Number.parseInt("3"); // 3
               // 2. parseInt("3"); // 3
               // 3. +"3" // 3

               // JSON.parse   => string -> object/array
               // JSON.stringify => object/array -> string
               const product = productList.find(product => product.id ===productId);

               if(product){
                  response.end(JSON.stringify(product))
               }else {
                  response.end("No Product found ...")
               }
            }else{
               response.writeHead(404);
               response.end('Resource not found.Please try with /categories or /product or /product/')
            
            }
     } 


};

const server = http.createServer(serverlistener);
const PORT = 8000;
const HOST ="localhost"

server.listen(PORT,HOST,() => {
        console.log(`Project Server runing on http://${HOST}:${PORT}`);
});

// To Stop server use CTRL +C


// Routes

// 1. /products
// 2. /categories
// 3. /products/PRODUCT_ID
