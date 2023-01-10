// Expression function is a value or expression by assigning an anonymous function  to a variable or parameter.

// Addition expression
import readline from 'readline-sync';
import chalk from 'chalk';

const calculateBill = function (mealAmount, taxrate, tip) {

    const total = mealAmount + taxrate + tip;
    return total;
}

const CustomermealAmount = +readline.question("Please enter mealAmount: ");
const taxrate = +readline.question("what is the tax rate: ");
const tipvalue = +readline.question("Any tip amount: ");

const totalBill = calculateBill(CustomermealAmount, taxrate, tipvalue);

console.log(chalk.bgBlue("Total customerBill:  ") + chalk.bgGreen(totalBill));


//      subtrction expression
const Bill = function (Foodbill, Rent, taxes) {
    const total = Foodbill - Rent - taxes;
    return total;

}

const CustomerFoodAmount = +readline.question("Foodbill of first person: ");
const Rent = +readline.question("Hotel rent: ");
const taxes = +readline.question("total tax: ");

const person1Bill = Bill(CustomerFoodAmount, Rent, taxes);

console.log(chalk.bgRed("TotalCustomer Bill:") + chalk.bgBlue(person1Bill));

// Multiplication expression

const Bill2 = function (Foodbill, Rent, taxes) {
    const total = Foodbill * Rent * taxes;
    return total;

}

const person2 = +readline.question("2nd person food bill: ");
const roomrent = +readline.question("Roomrent bill for two days: ");
const taxe = +readline.question("taxes added for two days: ");

const Billing = Bill2(person2, roomrent, taxe);
console.log(chalk.bgCyan("total person 2 bill: ") + chalk.bgGray(Billing));

// Division
const Bill3 = function (Foodbill, Rent, taxes) {
    const total = Foodbill / Rent / taxes;
    return total;

}

const person3 = +readline.question("3nd person food bill: ");
const roomwithac = +readline.question("Roomrent bill for two days: ");
const withtax = +readline.question("taxes added for two days: ");

const Billing1 = Bill3(person3, roomwithac, withtax);
console.log(chalk.bgCyan("total person 3 bill: ") + chalk.bgGray(Billing1));

// Module

const Bill4 = function (Foodbill, Rent, taxes) {
    const total = Foodbill % Rent % taxes;
    return total;

}

const person4 = +readline.question("4nd person food bill: ");
const roomrents = +readline.question("Roomrent bill for two days: ");
const taxs = +readline.question("taxes added for two days: ");

const Billing4 = Bill4(person4, roomrents, taxs);
console.log(chalk.bgCyan("total person 4 bill: ") + chalk.bgGray(Billing));