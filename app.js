// Import necessary modules
const { ChatOpenAI } = require("@langchain/openai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");
const inquirer = require("inquirer");
const chalk = require("chalk");

// Loads environment variables from a.env file
require("dotenv").config();

// Creates and stores a wrapper for the ChatOpenAI package along with basic configuration
const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: "gpt-4",
});

// Asynchronous function that will continuously prompt the user for input until they decide to exit.
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

    try {
      // Define the structured output parser for JavaScript-related coding questions.
      const parser = StructuredOutputParser.fromNamesAndDescriptions({
        code: "JavaScript code that answers the user's question with example code snippet",
        explanation: "Detailed explanation of the example code provided",
      });

      // Get the format instructions for the structured output.
      const formatInstructions = parser.getFormatInstructions();

      // Create the prompt template.
      const prompt = new PromptTemplate({
        template:
          "You are a JavaScript expert and will answer the user's only JavaScript-related coding questions as thoroughly as possible\n{format_instructions}\n{question}",
        inputVariables: ["question"],
        partialVariables: { format_instructions: formatInstructions },
      });

      // Format the user input into the prompt format.
      const promptInput = await prompt.format({ question: userInput });

      // Send the prompt to OpenAI and get the response.
      const res = await model.invoke(promptInput);
      const parsedOutput = await parser.parse(res.content);

      // Format the explanation with line breaks.
      const formattedExplanation = parsedOutput.explanation
        .replace(/\. /g, ".\n")
        .replace(/\n{2,}/g, "\n");

      // Print the formatted response to the console.
      console.log(
        chalk.blue.bold(
          "\n================== FORMATTED RESPONSE ==================\n" 
        )
      );
      console.log(
        chalk.greenBright.bold("CODE:\n") +
          chalk.bgBlack.white(`\t${parsedOutput.code}`)
      );
      console.log(
        chalk.yellow.bold("\nEXPLANATION:\n") +
          chalk.bgBlack.white(`\t${formattedExplanation}`)
      );
      console.log(
        chalk.blue.bold(
          "\n========================================================\n"
        )
      );
    } catch (err) {
      console.log(
        chalk.red.bold(
          "\n*** Sorry, I can only help with JavaScript questions. Please ask something related to JavaScript. ***\n"
        )
      );
    }
  }
};

// Start the application by invoking the promptFunc directly.
promptFunc();