// enable fs to use captured information
const fs = require("fs");

// create function to render badge
function renderBadge(license) {
  if (license === "none") {
    return "";
  }
  return `![LicenseBadge](https://img.shields.io/badge/License-${license}-brightgreen)
  `;
};

// create README markdown structure
const generateMarkdown = (gitData) => {
  console.log(gitData);

  const { title, license, description, install, usage, contribution, test, github, gitLink, email } = gitData

  return `# ${title}

  ${renderBadge(license)}

  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)

  ## Description <a name="description"></a>
  ${description}

  ## Installation <a name="installation"></a>
  ${install}

  ## Usage <a name="usage"></a>
  ${usage}

  ## Contributing <a name="contributing"></a>
  ${contribution}

  ## Tests <a name="tests"></a>
  ${test}

  **My Github repository ${github} can be found here: (${gitLink})**

  **Contact me: (${email})**  

  *This project is licensed under the ${license} license.*
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

// with both functions written make sure they are exported so index can pick them up
module.exports = { generateMarkdown, writeFile };