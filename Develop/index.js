const fs = require('fs');
const inquirer = require("inquirer");

async function generateReadme() {
    const questions = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your first name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your Title?",
                name: "title"
            },
            {
                type: "input",
                message: "Type a description of your Project.",
                name: "description"
            },
            {
                type: "input",
                message: "Please type an installation instruction seperated by Comma and space (, ). (ex. step1: one, step2: two, step3: three)",
                name: "installation"
            },
            {
                type: "input",
                message: "Write some examples of usage. Your input will show will generated as <code> tags.",
                name: "usage"
            },
            {
                type: "checkbox",
                message: "Choose license for a project.",
                name: "license",
                choices: [
                    "MIT License",
                    "Apache License",
                    "GPL License",
                    "Public Domain (unlicensed)"
                ]
            },
            {
                type: "input",
                message: "Write guidelines for other developers how to contribute.",
                name: "contributing"
            },
            {
                type: "input",
                message: "Write more detail on code and technologies used.",
                name: "tests"
            },
            {
                type: "input",
                message: "Enter the URL of your Github profile picture.",
                name: "profilePicture"
            },
            {
                type: "input",
                message: "Enter your GitHub email address.",
                name: "email"
            },
            {
                type: "input",
                message: "Write Table of Contents seperated by Comma and space (, ). (ex. description, usage, tests)",
                name: "tableOfContents"
            }
        ]);

    let fileName = questions.name.toUpperCase().split(' ').join('') + ".md";

    var callBackFunction = function(err){
        if (err) {
            return console.log(err);
        }
        console.log(`success`)
    }

    var tocSplit = questions.tableOfContents.split(', ');

    fs.writeFile( fileName, `# ${questions.title}`+'\n', callBackFunction );

    
    // for (var i=0; i<tocSplit.length; i++){
    fs.appendFile( fileName, 
        '## Description' + '\n' + questions.description + '\n' + '\n' +
        '## Table of Contents' + '\n' + 
        // `- [${tocSplit[i].charAt(0).toUpperCase() + tocSplit[i].slice(1)}](#${tocSplit[i]})` + '\n' +
        '\n' + '## Installation' + '\n' + '- ' + questions.installation.split(', ').join('\n'+'- ') + '\n' + '\n' +
        '## Usage' + '\n' + '```'+ '\n' + questions.usage + '\n' + '```' + '\n' + '\n' +
        '## License' + '\n' + questions.license + '\n' + '\n' +
        `## Contributing` + '\n' + questions.contributing + '\n' + '\n' +
        `## Tests` + '\n' + questions.tests + '\n' + '\n' +
        `## Questions` + '\n' + `| Ask me Now! |` + '\n' + `| :---: |` + '\n' +
        `| ![alt text](${questions.profilePicture} "Github Profile Picture") |` + '\n' +
        `| <a href="${questions.email}" target="_blank">Github Profile</a> |` + '\n'
        , callBackFunction );

}
generateReadme();
// - [Installation](#installation)
// - [Features](#features)
// - [Contributing](#contributing)
// - [Team](#team)
// - [FAQ](#faq)
// - [Support](#support)
// - [License](#license)
// | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> |
// | :---: |:---:| :---:|
// | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)    | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)  |
// | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> |
