
import inquirer from "inquirer";

async function calc() {
  let { weightInKgs, heightInMeters } = await inquirer.prompt([
    {
      type: "input",
      name: "weightInKgs",
      Message: "Enter your Weight in KGs:",
    },
    {
      type: "input",
      name: "heightInMeters",
      Message: "Enter your Height in Meters:",
    },
  ]);
  const bodyMassIndex = weightInKgs / (heightInMeters * heightInMeters);
  console.log(bodyMassIndex);
  if (bodyMassIndex <= 18.5) {
    console.log(
      `your BMI Is: ${bodyMassIndex}. Congratulations! You are Under Weight.`
    );
  } else if (bodyMassIndex <= 25) {
    console.log(`your BMI Is: ${bodyMassIndex}. You are Normal.`);
  } else if (bodyMassIndex <= 30) {
    console.log(`your BMI Is: ${bodyMassIndex}. Sorry! You are Over Weight.`);
  } else {
    console.log("Don't mind You are Hugely Obese.");
  }
}
calc();
