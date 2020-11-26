// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//going to use require to pull from employee.js
const Employee = require("./employee");
//going to copy and paste from my engineer & change a few things
class Intern extends Employee {
    constructor(name, id, email, school) { //using school
        super(name, id, email); //using the superclass objects
        this.school = school;
    };
    //returning school and role
    getSchool() {
        return this.school;
    };
    getRole() {
        return "Intern";
    };
};

module.exports = Intern;