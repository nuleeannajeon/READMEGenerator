const inquirer = require("inquirer");

async function readmeQuestions() {
    const questions = await inquirer
        .prompt([
            {
                type: "input",
                message: "Write Table of Contents seperated by Commas(,). (ex. description, usage, tests)",
                name: "tableOfContents"
            }
        ]);
    console.log( questions.tableOfContents )
    var justsplit = questions.tableOfContents.split(', ')
    console.log(justsplit)
    console.log(justsplit[0])
    console.log(justsplit[1])
    console.log(justsplit[2])
    var split = JSON.stringify(questions.tableOfContents.split(', '))
    console.log(split)
    var parse = JSON.parse(split);
    console.log (parse)
    console.log( parse[0]);

    // var stringify =  JSON.stringify(questions.tableOfContents)
    // console.log( stringify );
    
    // var parse = JSON.parse(questions.tableOfContents)
    // console.log(parse );
}

readmeQuestions ();
