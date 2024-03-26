#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    message: "Please Guessed The Number Between 1 to 6 : ",
    type: "number",
    name: "userguessnumber",
  },
]);

if (answer.userguessnumber === randomnumber) {
  console.log("Congratulations You Guess The Right Number");
} else {
  console.log("You Guessed Wrong Number");
}
