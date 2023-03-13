import filesystem from "fs";
import readline from "readline-sync";
import chalk from "chalk";


function getfileData (filepath){
        const filebuffer = filesystem.readFileSync(filepath);
        const Convert_to_JSON = JSON.parse(filebuffer);
        return Convert_to_JSON;
}


// const categoriesBuffer = filesystem.readFileSync("./categories.json");
// const Catergories = JSON.parse(categoriesBuffer);
// console.log(Catergories);


// const Productsbuffer = filesystem.readFileSync("./products.json");
// const Products =JSON.parse(Productsbuffer);
// console.log(Products)

export const categories = getfileData("./categories.json")
export const Products = getfileData("./products.json");

export function getCategory(){
        const displayCategories = categories.map( (catergory) =>{
                const firstletter = catergory[0].toUpperCase();
                const remainingletters = catergory.substr(1).toLowerCase();
                return firstletter + remainingletters;
        });

const UserSelectedOptionIndex = readline.keyInSelect(displayCategories);
// console.log("User selected category Index = ", UserSelectedOptionIndex);

const UserSelectedCatergory = categories[UserSelectedOptionIndex]
console.log(chalk.bgGreen(`User Selected Catergory: ${UserSelectedCatergory}`));

        return UserSelectedCatergory;
};


 export function getProduct(category){ 
        if (category) {
                const categoryProduct = Products.filter(product => product.category === category);
                const productName = categoryProduct.map(product => product.tittle);
                const SelectedProductIndex = readline.keyInSelect(productName);
                const SelectedProduct = categoryProduct[SelectedProductIndex];
                return SelectedProduct;
        }
}  

export function displayProductinfo(product){
        if (product){
                const title = product.title;
        const price = product.price;
        const category = product.category;
        console.log(chalk.bgGreen(title));
        console.log(chalk.bgRed(`Price: $${price}`) + chalk.blue(`Category: ${category}`));
        }
}


   