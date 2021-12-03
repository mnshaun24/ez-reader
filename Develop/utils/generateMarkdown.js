// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = gitData => {
  console.log(gitData);

  return `# ${promptUser.title}

  ##${promptUser.description}

  ##${promptUser.install}

  ##${promptUser.usage}

  ##${promptUser.contribution}

  ##${promptUser.test}

  **My Github repository ${promptUser.github} can be found here: (${promptUser.gitLink})**

  **Contact me: (${promptUser.email})**  

  *This project is licensed under the ${promptUser.license} license.*
`;
};
