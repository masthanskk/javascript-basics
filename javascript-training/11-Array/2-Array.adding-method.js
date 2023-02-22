import  readline  from 'readline-sync';
import chalk from 'chalk';
 
const ADD_STUDENTS = 'Add students';
const SHOW_STUDENTS = 'Show list of students'

const USER_INPUTS =[
        ADD_STUDENTS,
        SHOW_STUDENTS,
]

let RunProgram = true;
let students =[];

while(RunProgram){
        const Userinputsindex = readline.keyInSelect(USER_INPUTS);
        const USerIndex = USER_INPUTS[Userinputsindex]; 
     // console.log(`User Selected choice is ${ chalk.bgGreen(USerIndex)}`);
        
       if (USerIndex === ADD_STUDENTS){
           const newStudents = readline.question("Please enter new students name : ");

          if(newStudents){
                students.push(newStudents);
                console.log(chalk.bgBlue(`${newStudents} added to student list`));
          } 

       }
        else if(USerIndex == SHOW_STUDENTS){
                console.log(`List of students`);
                console.log(students);
        }
        else {
                RunProgram = false;
        }
}
