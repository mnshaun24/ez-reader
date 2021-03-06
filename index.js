// require files and set up functions
const inquirer = require("inquirer");
const { generateMarkdown, writeFile } = require("./Develop/utils/generateMarkdown");

// run main function to gather needed data
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'title',
            message: "What is the title of your project? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a project title.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmDesc",
            message: "Would you like to enter a description for the project?",
            default: true
        },
        {
            type: "input",
            name: "description",
            message: "Provide your project's description.",
            when: ({confirmDesc}) => confirmDesc
        },
        {
            type: "confirm",
            name: "confirmInstall",
            message: "Would you like to provide intallation instructions?",
            default: true
        },
        {
            type: "input",
            name: "install",
            message: "Provide your project's installation instructions.",
            when: ({confirmInstall}) => confirmInstall
        },
        {
            type: "confirm",
            name: "confirmUsage",
            message: "Would you like to provide usage information?",
            default: true
        },
        {
            type: "input",
            name: "usage",
            message: "Provide your usage information.",
            when: ({confirmUsage}) => confirmUsage
        },
        {
            type: "confirm",
            name: "confirmContr",
            message: "Would you like to provide contribution guidelines?",
            default: true
        },
        {
            type: "input",
            name: "contribution",
            message: "Provide contribution guidelines.",
            when: ({confirmContr}) => confirmContr
        },
        {
            type: "confirm",
            name: "confirmTest",
            message: "Would you like to provide test instructions?",
            default: true
        },
        {
            type: "input",
            name: "test",
            message: "Provide test instructions.",
            when: ({confirmTest}) => confirmTest
        },
        {
            type: "checkbox",
            name: "license",
            message: "What is your project licensed under?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the name of your github repository? (Required)",
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log("Enter your github repository.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "gitLink",
            message: "What is the link to your github repository?"
        }
    ]);
};

// proccess promise returns
promptUser()
    .then(newThing => {
        const pageMD = generateMarkdown(newThing);
        return writeFile(pageMD);
    })
    .then(makeFileResponse => {
        console.log(makeFileResponse);
    })
    // with second promise obtained, make sure errors are shown
    .catch(err => {
        console.log(err);
    });