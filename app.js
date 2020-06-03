const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const team = [];
function promptManager() {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Name Of Manager:",
      },
      {
        name: "id",
        type: "number",
        message: "Managers ID Number:",
      },
      {
        name: "email",
        type: "input",
        message: " Managers Email:",
      },
      {
        name: "officeNumber",
        type: "number",
        message: "Managers Office Number:",
      },
    ])
    .then(function (res) {
      // console.log(res);
      const { name, id, email, officeNumber } = res;
      const manager = new Manager(name, id, email, officeNumber);
      // console.log(manager);
      team.push(manager);
      // console.log(team);
    });
}

function promptRole() {
  return inquirer.prompt({
    name: "role",
    type: "list",
    message: "What role is your next team member:",
    choices: ["Engineer", "Intern", "Done"],
  });
}

// function promptOtherMembers() {
//     promptRole().then(function(res){
//         console.log(res);
//     })
// }
startapp();
async function startapp() {
  try {
    await promptManager();
    const role = await promptRole();
    //    console.log(role.role)
    if (role.role === "Engineer") {
      return inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "Name Of Engineer:",
        },
        {
          name: "id",
          type: "number",
          message: "Engineers ID Number:",
        },
        {
          name: "email",
          type: "input",
          message: " Engineer Email:",
        },
        {
            name: "github",
            type: "input",
            message:"Engineers github username:"
        }
      ]).then(function (res) {
        // console.log(res);
        const { name, id, email, github } = res;
        const engineer = new Engineer(name, id, email, github);
        // console.log(manager);
        team.push(engineer);
        console.log(team);
      });

    }
  } catch (err) {
    console.log(err);
  }
}
