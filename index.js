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
                type: "input",
                message: "Provide License name. If you have multiple licenses to provide, seperate them by Comma and Space (, ) (ex. MIT License, Apache License)",
                name: "licenseName"
            },
            {
                type: "input",
                message: "Provide URL of License mentioned previously in order. (ex. https:test.com, https:test2.com)",
                name: "licenseUrl"
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
    
    let tocResult = '';
    for (var i=0; i<tocSplit.length; i++){
        tocResult += `- [${tocSplit[i].charAt(0).toUpperCase() + tocSplit[i].slice(1)}](#${tocSplit[i]}) \n`
    }
    
    var licenseNameSplit = questions.licenseName.split(', ');
    var licenseUrlSplit = questions.licenseUrl.split(', ');

    let licenseResult = '';
    let licenseBadge = '';
    for (var i=0; i<licenseNameSplit.length; i++){
        licenseResult += `- **[${licenseNameSplit[i]}](${licenseUrlSplit[i]})** \n`
        licenseBadge += `![License](https://img.shields.io/badge/License-${licenseNameSplit[i].split(' ').join('%20')}-blue)`
    }
    
    //In the develop folder, there is seprate index.js to make .md file under your first name!

    fs.writeFile( 'README.md', 
        `# ${questions.title}`+ '\n' +
        '## Description' + '\n' + questions.description + '\n' + '\n' +
        '## Table of Contents' + '\n' + tocResult + '\n' + 
        '## Installation' + '\n' + '- ' + questions.installation.split(', ').join('\n'+'- ') + '\n' + '\n' +
        '## Usage' + '\n' + '```'+ '\n' + questions.usage + '\n' + '```' + '\n' + '\n' +
        '## License' + '\n' + licenseBadge + '\n' + licenseResult + '\n' + 
        `## Contributing` + '\n' + questions.contributing + '\n' + '\n' +
        `## Tests` + '\n' + questions.tests + '\n' + '\n' +
        `## Questions` + '\n' + `| Ask me Now! |` + '\n' + `| :---: |` + '\n' +
        `| ![alt text](${questions.profilePicture} "Github Profile Picture") |` + '\n' +
        `| <a href="${questions.email}" target="_blank">Checkout Github Profile</a> |` + '\n'
        , callBackFunction );

}
generateReadme();