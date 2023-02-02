import readline from 'readline-sync';
 import chalk from 'chalk';

 const VIVO ='Vivo';
 const Oppo ='oppo';
 const Samsung = 'Samsung';
 const IPHONE ='Iphone';

 const Mobiles =[
        VIVO,
        Oppo,
        Samsung,
        IPHONE
 ];

 const ViVo_models= [
        ' vivo v15    = 26,000',
        ' vivo v17    = 32,000',
        ' vivo v11    =  11,000',
        ' vivo v9     =  9,500 '
 ];

 const Oppo_models =[
        ' oppo F1s   = 15,000',
        ' oppo A31   = 12,490',
        ' oppo A74   = 15,490'
 ];

 const Samsung_models = [
        ' Samsung Galaxy M04  = 10,499 ',
        ' Samsung Galaxy M13 = 13,999',
        ' Samsung Galaxy M53   = 14,499'
 ];

 const IPHONE_models = [
        'Apple iphone 13 (128GB) = 61,999',
        ' Apple iphone 14 Pro (256GB) = 1,39,900',
        ' Apple iphone 14 Pro (128GB) = 1,22,999'
 ];

 const Selected_items ={                            // const Shopping_Items ={
                               // 'Mens':[' 3 Shirts  = 699',' 3 Phants  = 999', ' 5 T-shirts = 1000', ' 2 Night-Phants = 599']
        'Vivo':ViVo_models,      //'Girls':[ ' 2 sarees   = 899',' 3 Night- Tracks = 699',' 5 T-Shirts     = 899']
        'oppo': Oppo_models, // 'Kids':[' 12 Years childrens 5 phants  = 500 ',' 10 Years childrens 5 T-shirts = 450',' 15 Years childrens 3 Phants   = 500']
        'Samsung': Samsung_models, // 'Baby Kids':[ ' 6 Months Baby kit = 1000', ' 1 year Baby kit = 1100',' 2 years Baby kit = 1500']
        'Iphone': IPHONE_models
 }



 console.log(chalk.bgRed(`Welcome to Amazon `));
 console.log(chalk.bgBlue(` Please continue  `));

 const shopping_list = readline.keyInSelect(Mobiles);
 const Shopping_items = Mobiles[shopping_list]
 console.log(Shopping_items);

 display(Shopping_items);

 function display (Category){
        const Selectedthings =Selected_items [Category]
        if (Selectedthings){
                const Select_Items_index =readline.keyInSelect(Selectedthings);
        const Select_List = Selectedthings[Select_Items_index];
        if (Select_List) {
                console.log(chalk.bgBlackBright(`Thanks for order ${Select_List}`));
        } else{
                Show_No_option_message();
                
        }
    }  else {
        Show_No_option_message();
    }
}
       


 function Show_No_option_message (){
        console.log(chalk.bgRed(`Not select any Option`));
 }
 
 