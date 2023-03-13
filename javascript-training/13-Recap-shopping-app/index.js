
import chalk from "chalk";

import { getCategory,displayProductinfo , getProduct } from "./utils.js";

console.log(chalk.bgGreen("Welcome Azamon Shopping App"))

const Selectedcategory = getCategory();
if(Selectedcategory){
        const product = getProduct(Selectedcategory);
if(product){
        const title = product.title;
        const price = product.price;
        const category = product.category;
        console.log(chalk.bgGreen(title));
        console.log(chalk.bgRed(`Price: $${price}`) + chalk.blue(`Category: ${category}`));
        
}
}




