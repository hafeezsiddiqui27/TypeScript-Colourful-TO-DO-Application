#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bold.yellow(`\n  \t\t <<<================================================>>>`));
console.log(chalk.bold.blue(`<<<=========>>>  ${chalk.blueBright.bold("Welcome To 'Hafeez Siddiqui' - CLI TODO-LIST")}  <<<=========>>>`));
console.log(chalk.bold.yellow(`\t\t <<<===============================================>>>\n`));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: (chalk.bold.magenta("Enter Your New Task")),
        },
    ]);
    todoList.push(addTask.task);
    console.log((chalk.greenBright(`${addTask.task} is added to your tasks in todo list application`)));
    let addMoreTask = await inquirer.prompt([
        {
            name: `addMore`,
            type: `confirm`,
            message: (chalk.bold.blue(`Do You Want To Add more Task`)),
            default: false,
        },
    ]);
    conditions = addMoreTask.addMore;
}
console.log(chalk.bold.greenBright(`Your updated TO-DO list is `, todoList));
