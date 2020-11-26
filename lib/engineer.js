// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//going to use require to pull from employee.js 
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); //using the superclass objects
        this.github = github;
    };
    //returning github and role
    getGithub() {
        return this.github;
    };
    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer;