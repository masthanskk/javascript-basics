 
 import readline from 'readline-sync';
 import chalk from 'chalk';

 const VEG = 'Veg';
 const NON_VEG ='Non-veg';
 const DESERTS ='Deserts';
 const BEVERAGES ='Beverages'

 const MENU_CATEGORY = [
        VEG,    // 0
        NON_VEG, // 1
        DESERTS, // 2
        BEVERAGES // 3
 ];

 const FOOD_ITEMS ={
       'Veg' : [
              'Veg biryani = 100',
              'Veg fired rice = 80',
              ' veg Plan rice = 55',
               ],
    'Non-veg' : [
               'Chicken Biryani  = 150',
               'Chicken Fired Piece biryani = 180',
               'Mutton Biryani = 200',
               ],
   'Deserts':  [ 
               'Chocolate ice Cream = 125',
               'Black current ice cream = 180'
               ],
 'Beverages':  [
               'Thumsup = 25',
               'Coke    = 20',
               'String  = 20'
              ]          
} 

             
 // SHOW User a menu list.

       console.log(chalk.bgGreen(`FOOD MENU CATEGORY`));
       console.log('Please select a Category');

  const SELECTED_CATEGORY_INDEX = readline.keyInSelect(MENU_CATEGORY);    // 3 => 2
  const SELECTED_CATEGORY =MENU_CATEGORY[SELECTED_CATEGORY_INDEX];  // Deserts
  console.log(`selected category Index ${SELECTED_CATEGORY}`);

  // Pick Menu Items.
 
    DisplayMenuItems(SELECTED_CATEGORY);

    function DisplayMenuItems(category){
       const menuitems = FOOD_ITEMS[category];
        
       if(menuitems){
              const SelectedItemIndex = readline.keyInSelect(menuitems);
              const SELECTED_ITEM = menuitems[SelectedItemIndex];

          if (SELECTED_ITEM) {
              console.log(chalk.bgRed(`Thanks for Buying ${SELECTED_ITEM}`));
          } else{
              Show_Not_Selected_Message();
          }


       }else{
              Show_Not_Selected_Message();
       }
    }

function Show_Not_Selected_Message (){
       console.log(chalk.bgRedBright(`Not selected any option`));
       
}
      