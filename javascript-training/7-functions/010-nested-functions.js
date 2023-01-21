const TAX_AMOUNT = 30;


// Function expression define
const shopping = function(amount){

    const DISCOUNT_AMOUNT = 40;

    // Arrow function
    const calculatetax = () =>{
        return amount + TAX_AMOUNT;                //  500  + 30  = 530
 
 
    }

        // function Declaration

    function addDiscount(){ 
        
    return DISCOUNT_AMOUNT  ;                       //  530   -  40  = 490
    }

    const total = calculatetax() - addDiscount();     // -
 return total;                                          // 490
}

// Invoking the function 

const billamount = shopping(500);
console.log(`Billing = ${billamount}`);



//  Example function Expression  in Arrow function

const Tshirt = function(price){

    const calculatetax = ()=>{
        return price +60 ;                     // 300   +  60   = 360
    }

    const GSTTaxes = ()=>{
        return 70;                             // 360   +  70    = 430
    }

const total = calculatetax() + GSTTaxes();      // +
return total;                                           // 430
}

const Shirtprice = Tshirt(300);
console.log(`The price LEE cuper shirt is ${Shirtprice}`);



// ponits to be NOTE 

//1. We can't access any values from the function.
//2. We can access outer variable in the function.

function shoppingDetails(Amount) {
    const DISCOUNT_AMOUNT = 25;

  function calculatetaxamount(){
    const Taxamount = Amount + TAX_AMOUNT;
    return Taxamount;

  }
   
  function Getdiscountamount (){
    const total = calculatetaxamount();
    const AmountwithDiscount = total - DISCOUNT_AMOUNT;
    return AmountwithDiscount;
  }
   const Actualvaluebill = Getdiscountamount();
  return{
    amount:Amount,
    billAmount: Actualvaluebill,
    discount : DISCOUNT_AMOUNT,
    amountWithtax : calculatetaxamount(), // here we invoked the function
  }
  
}

const userAmount = 200;
const details = shoppingDetails(userAmount);
console.log(details);

 