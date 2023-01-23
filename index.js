const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const {questions} = require("./utils/questions");

// function to get the answers from the user and call the function that will create the file
function promptUser() {
  
    inquirer.prompt(questions).then( (data) => {
            writeToFile(generateMarkdown(data));
        });
  }


// function to write README file
function writeToFile(data) {

    fs.writeFile('./generated_files/README.md', data, (err) => {
        if (err) throw err;
        console.log('Your README file was created in the generated_files folder!');
      });
}

// function to initialize program
function init() {
    console.log('------Welcome to the README file generation app---------');
    console.log('Please provide the following information about each part of the file');
    promptUser();
}

// function call to initialize program
init();
