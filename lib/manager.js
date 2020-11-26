// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//going to use require to pull from employee.js
const Employee = require("./employee");
//going to copy and paste from my engineer/intern & change a few things
class Manager extends Employee {
    constructor(name, id, email, officeNumber) { //using officeNumber
        super(name, id, email); //using the superclass objects
        this.officeNumber = officeNumber;
    };
    //returning school and role
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return "Manager";
    };
};

module.exports = Manager;