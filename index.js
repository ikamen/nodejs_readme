const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'title',
        message: 'What is your project title?'
    },
    {
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project'
    },
    {
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        name: 'license',
        type: 'list',
        choices: [ 
            {name:"Apache Lincense 2.0",
            value:1},
            {name: "GNU GPL 3.0",
            value:2},
            {name:"MIT License",
            value:3}
            ],
        message: 'License'
    },
    {
        name: 'contributing',
        message: 'List your collaborators'
    },
    {
        name: 'tests',
        message: 'Provide examples on how to run tests for your application'
    },
    {
        name: 'githubrepo',
        message: 'Project GitHub repository URL'
    },
    {
        name: 'email',
        message: 'Your email address'
    }
  ];

function promptUser() {
  
    inquirer.prompt(questions).then( (data) => {
            writeToFile(generateMarkdown(data));
            // writeToFile("Test");
        });
  }


// function to write README file
function writeToFile(data) {
    //console.log("creating the file: " + data);
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
