import readline from 'readline-sync';
import chalk from 'chalk';

const friends = ['Syed', 'Zakeer']

let Show_friends =' Display Friends'
let Add_friends = 'Add Friends '

const USER_ACTIONS = [
        Show_friends,   // 0
        Add_friends     // 1
]

let CanRunProgram = true

while(CanRunProgram)  {
        const userActionINDEX = readline.keyInSelect(USER_ACTIONS);
        console.log(chalk.bgBlue("user selected action index: "), chalk.red(userActionINDEX));
        
if (userActionINDEX === -1) {
        console.log(chalk.bgRed("Stoping Application ..."));
        CanRunProgram = false;   
}  else{
        const USER_SELECTED_ACTION = USER_ACTIONS[userActionINDEX];
        console.log(chalk.bgGreen("User Selected Action: "), chalk.green(USER_SELECTED_ACTION));

  
 if (USER_SELECTED_ACTION === Show_friends ) {
        console.log(friends);

        
      }else{ 
        const new_friendName = readline.question("Please enter new friend name : ");
        friends.push(new_friendName); 
}
}
}