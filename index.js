// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s title?',
    validate: titleInput => {
      if (titleInput) {
        return true
      } else {
        console.log('Please enter your project title.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Briefly describe your project.',
    validate: descInput => {
      if (descInput) {
        return true
      } else {
        console.log('Please enter a project description.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'installSteps',
    message: 'Provide installation steps for your project.',
    validate: installInput => {
      if (installInput) {
        return true
      } else {
        console.log('You need to provide installation instructions.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for your project.',
    validate: usageInput => {
      if (usageInput) {
        return true
      } else {
        console.log('You need to provide usage information.')
        return false
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license.',
    choices: [ 'Apache-2.0-License', 'Boost-Software-License-1.0', 'GNU-AGPLv3-License', 'GNU-GPLv3-License', 'GNU-LGPLv3-License', 'MIT-License', 'Mozilla-Public-License-2.0', 'Unilicense' ]
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How should others contribute to your project?',
    validate: contributeInput => {
      if (contributeInput) {
        return true
      } else {
        console.log('Please identify how others can contribute.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'testSteps',
    message: 'What are the steps to test your project?',
    validate: testInput => {
      if (testInput) {
        return true
      } else {
        console.log('Please enter one or more tests for your project.')
      }
    }
  },
  {
    type: 'input',
    name: 'gitHubUsername',
    message: 'Please provide your GitHub username for the README\'s contact section.',
    validate: usernameInput => {
      if (usernameInput) {
        return true
      } else {
        console.log('You must enter your GitHub username.')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address for the README\'s contact section.',
    validate: emailInput => {
      if (emailInput) {
        return true
      } else {
        console.log('You must provide your email address.')
        return false
      }
    }
  }
]

// TODO: Create a function to write README file
const writeToFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err)
        return
      }

      resolve({
        ok: true,
        message: 'File created.'
      })
    })
  })
}

// TODO: Create a function to initialize app
const init = () => {
  // ask the user questions about their project
  inquirer.prompt(questions)
    // take user input and create markdown content
    .then(projectData => {
      return generateMarkdown(projectData)
    })
    // take markdown content and create md file
    .then(writeToFile)
    .catch(err => {
      console.log(err)
    })
}

// Function call to initialize app
init()
