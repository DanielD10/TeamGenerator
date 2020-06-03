const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname,"output");
const outputPath = path.join(OUTPUT_DIR, "team.html")
const render = require("./lib/htmlRenderer");

const team = [];
function promptManager() {
    return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Name Of Manager:"
        },
        {
            name: "id",
            type: "number",
            message: "Managers ID Number:"

        },
        {
            name: "email",
            type: "input",
            message:" Managers Email:"
        },
        {
            name: "officeNumber",
            type: "number",
            message: "Managers Office Number:"
        }
    ]).then(function(res){
        console.log(res);
        const { name, id, email, officeNumber } = res;
        const manager = new Manager(name, id, email, officeNumber);
    })
}
promptManager();
