// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

const fs = require("fs");
// const { resolve } = require("path/posix"); <- wtf is this?


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = gitData => {
  console.log(gitData);

  return `# ${gitData.title}

  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)

  ## Description <a name="description"></a>
  ${gitData.description}

  ## Installation <a name="installation"></a>
  ${gitData.install}

  ## Usage <a name="usage"></a>
  ${gitData.usage}

  ## Contributing <a name="contributing"></a>
  ${gitData.contribution}

  ## Tests <a name="tests"></a>
  ${gitData.test}

  **My Github repository ${gitData.github} can be found here: (${gitData.gitLink})**

  **Contact me: (${gitData.email})**  

  *This project is licensed under the ${gitData.license} license.*
`;
};


// create the file to write the output and include promise
const writeFile = readMeContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./develop/dist/README.md", readMeContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!"
      });
    });
  });
};

module.exports = { generateMarkdown, writeFile };