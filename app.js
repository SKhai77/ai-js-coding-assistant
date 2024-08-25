require("dotenv").config();

const inquirer = require("inquirer");

const promptFunc = async () => {
  while (true) {
    const { userInput } = await inquirer.prompt([
      {
        type: "input",
        name: "userInput",
        message: "Type your JavaScript question (or type 'exit' to quit):",
      },
    ]);

    if (userInput.toLowerCase() === "exit") {
      console.log("\nExiting the application...\n");
      break;
    }

    console.log(`You asked: ${userInput}`);
  }
};

// Start the application
promptFunc();