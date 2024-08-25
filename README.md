# AI JavaScript Coding Assistant

An AI-powered CLI tool for answering JavaScript queries instantly.


## User Story

```md
AS A developer,
I want an AI-powered CLI tool that can answer JavaScript-related questions
So that I can resolve issues and learn best practices efficiently while coding
```

## Acceptance Criteria
```md
GIVEN an AI-powered CLI application capable of interpreting JavaScript-related questions
WHEN a user submits a question through the command line
THEN the application processes the input and generates an AI-based response relevant to the question in JSON format
WHEN it cannot generate a meaningful response due to unclear or incomplete input
THEN it prompts the user to refine their question or provide more details, ensuring clarity and relevance
```


## Description

The AI JavaScript Coding Assistant is an AI-powered command-line interface application designed to help developers answer JavaScript-related questions efficiently. This tool leverages advanced AI technologies to interpret user queries and provide accurate, context-aware responses in JSON format. It's perfect for developers seeking quick answers during coding, enhancing productivity and learning.


## Technologies

```md
- OpenAI API
- LangChain
- JavaScript
- Node.js(v20.16.0)
- dotenv
- inquirer(v8.2.6)
- Chalk
```

## Installation

To install the AI JavaScript Coding Assistant, follow these steps:

```md
git clone [repository-url]
cd ai-javascript-coding-assistant
npm install
```

## Environment Setup

Before running the application, you'll need to set up the necessary environment variables:
    Create a .env file in the root directory of the project.
    Add the following line to your .env file:
```bash   
OPENAI_API_KEY=Your-OpenAI-API-Key-Here
```
Replace Your-OpenAI-API-Key-Here with your actual OpenAI API key.   


## Usage
To start using the AI JavaScript Coding Assistant, ensure your environment variables are set, and then run the following command:

```md
node app.js
```

When prompted, submit your JavaScript questions directly through the command line:

```md
? Enter your JavaScript question: How do I add an element to an array in JavaScript?
```

The application will use the OpenAI API to generate responses based on your queries and output them in JSON format.