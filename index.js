// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is this software for?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What commands do you need to run for installation?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is your license?',
        choices: ['MIT', 'Apache 2.0', 'IBM', 'BSD', `None`]
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What do you plan to use this for?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who else contributed?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command do you need to run test?',
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    return fs.writeFileSync(fileName, data)
}; 

// TODO: Create a function to initialize app
init = () => {
    questions()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => writeToFile(`README.md`, generateMarkdown(answers)) )
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
}
// Function call to initialize app
init();
