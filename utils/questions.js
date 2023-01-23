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
        name: 'githubusername',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        message: 'What is your email address?'
    }
  ];

  module.exports.questions = questions;