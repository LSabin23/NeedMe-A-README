// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license) {
    return `![License badge](https://img.shields.io/static/v1?label=License&message=${license}&color=informational)`
  } else {
    return ''
  }
}

// NOTE: This isn't listed as part of the acceptance criteria for this challenge. Skipped.
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink (license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license) {
    return `NOTICE: This project is covered under the ${license}.`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testSteps}

  ## Contact
  [Check out ${data.gitHubUsername} on GitHub](https://github.com/${data.gitHubUsername}/), but you can also send an email to [${data.gitHubUsername}'s email](mailto:${data.email}) with any questions!
  `
}

module.exports = generateMarkdown
