



  
        
    
        function displayMenuItem(Category){
                const Menuitems = FOOD_ITEMS[category];

        }
        if (Menuitems) {
                const SelectedIndexItems = readline.keyInSelect(Menuitems);
                const SelectedIndex = FOOD_ITEMS[SelectedIndexItems];

                if (SelectedIndex) {
                        console.log(chalk.bgBlue(`Thanks for buying ${SelectedIndex}`))
                        
                }else{

                }
                
        }

        function Show_Not_Selected_Message(){
                console.log(chalk.bgRed(`Not Selecting any option`));
        }