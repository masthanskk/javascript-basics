 import readline from 'readline-sync';
 import chalk from 'chalk';

 const Mens ='Mens';
 const Girls ='Girls';
 const Kids = 'Kids';
 const Baby_ware ='Baby Kids';

 const Shopping =[
        Mens,
        Girls,
        Kids,
        Baby_ware
 ];

 const Mens_ware= [
        ' 3 Shirts  = 699',
        ' 3 Phants  = 999',
        ' 5 T-shirts = 1000',
        ' 2 Night-Phants = 599'
 ];

 const Girls_Dress =[
        ' 2 sarees   = 899',
        ' 3 Night- Tracks = 699',
        ' 5 T-Shirts     = 899'
 ];

 const Kids_section = [
        ' 12 Years childrens 5 phants  = 500 ',
        ' 10 Years childrens 5 T-shirts = 450',
        ' 15 Years childrens 3 Phants   = 500'
 ];

 const Baby_ware_section = [
        ' 6 Months Baby kit = 1000',
        ' 1 year Baby kit = 1100',
        ' 2 years Baby kit = 1500'
 ];

 const Shopping_Items ={                            // const Shopping_Items ={
                               // 'Mens':[' 3 Shirts  = 699',' 3 Phants  = 999', ' 5 T-shirts = 1000', ' 2 Night-Phants = 599']
        'Mens':Mens_ware,      //'Girls':[ ' 2 sarees   = 899',' 3 Night- Tracks = 699',' 5 T-Shirts     = 899']
        'Girls': Girls_Dress, // 'Kids':[' 12 Years childrens 5 phants  = 500 ',' 10 Years childrens 5 T-shirts = 450',' 15 Years childrens 3 Phants   = 500']
        'Kids': Kids_section, // 'Baby Kids':[ ' 6 Months Baby kit = 1000', ' 1 year Baby kit = 1100',' 2 years Baby kit = 1500']
        'Baby Kids': Baby_ware_section
 }



 console.log(chalk.bgRed(`Welcome to Myntra `));
 console.log(chalk.bgBlue(` Please continue your shopping `));

 // Show Menu List

 const Shopping_List = readline.keyInSelect(Shopping);
 const Shopping_Menu_list = Shopping[Shopping_List];
 console.log(`Selected Category Index ${Shopping_Menu_list}`);

 // Pick up Menu list

        DisplayShoppingItems(Shopping_Menu_list);

 function DisplayShoppingItems(Category){
        const Menuitems = Shopping_Items [Category];
 
 if (Menuitems){
        const Selected_Items = readline.keyInSelect(Menuitems);
        const SelectedList = Menuitems[Selected_Items];

    if(SelectedList){
        console.log(chalk.bgGreen(`Thank you Vist Again ${SelectedList}`));
    } else{
        Show_Not_Selected_Message();
    }
 } else {
        Show_Not_Selected_Message
 }
}


    function Show_Not_Selected_Message(){
        console.log(chalk.bgBlueBright(`Not Select any option `));
    }
