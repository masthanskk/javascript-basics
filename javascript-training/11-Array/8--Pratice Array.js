const ShoppingPrice = [199, 299, 399, 499];
const discountprice =[];
const DISCOUNT_PERCENTAGE= 25;


function applydiscount (amount,DISCOUNT_PERCENTAGE = 20){
        // Discount formula = (value * discount) /100;

        const discount = (amount * DISCOUNT_PERCENTAGE) / 100;
        return amount - discount;
}

for (let index = 0; index < ShoppingPrice.lengtShoppingPrice;index++) {
        const value = ShoppingPrice[index];


        const discountAmount = applydiscount(value,DISCOUNT_PERCENTAGE);
        discountprice.push(discountAmount);
}

const using_map = ShoppingPrice.map(amount =>applydiscount(amount));

console.log(ShoppingPrice);
console.log(using_map);

