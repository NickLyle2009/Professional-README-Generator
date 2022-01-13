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
        message: 'What is title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is your favorite food?',
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
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter your LinkedIn URL.',
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
