#! /usr/bin/env node
// SHABANG is a name of that file in 1st line.

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);

//conditional estatment
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
      console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);    
}else {
  console.log(("Please select valid operator"));
}


