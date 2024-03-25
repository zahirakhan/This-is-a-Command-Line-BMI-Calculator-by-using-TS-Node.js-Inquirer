
import inquirer from "inquirer";
import chalk from "chalk";

async function calc() {
  let { weightInKgs, heightInMeters } = await inquirer.prompt([
    {
      type: "input",
      name: "weightInKgs",
      Message: chalk.blue("Enter your Weight in KGs:"),
    },
    {
      type: "input",
      name: "heightInMeters",
      Message: chalk.blue("Enter your Height in Meters:"),
    },
  ]);
  const bodyMassIndex = weightInKgs / (heightInMeters * heightInMeters);
  console.log(bodyMassIndex);
  if (bodyMassIndex <= 18.5) {
    console.log(chalk.green(
      `your BMI Is: ${bodyMassIndex}. Congratulations! You are Under Weight.`
    ));
  } else if (bodyMassIndex <= 25) {
    console.log(chalk.yellow(`your BMI Is: ${bodyMassIndex}. You are Normal.`));
  } else if (bodyMassIndex <= 30) {
    console.log(chalk.red(`your BMI Is: ${bodyMassIndex}. Sorry! You are Over Weight.`));
  } else {
    console.log(chalk.bgRed("Don't mind You are Hugely Obese."));
  }
}
calc();
