// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact](#contact)

  ## Installation
  ${data.installSteps}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testSteps}

  ## Contact
  [Check out ${data.gitHubUsername} on GitHub!](https://github.com/${data.gitHubUsername}/), but you can also send an email to [${data.gitHubUsername}'s email](mailto:${data.email}) with any questions!
  `
}

module.exports = generateMarkdown
