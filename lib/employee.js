// TODO: Write code to define and export the Employee class
// constructor function to create employees object with name, id, & email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    //Now its times to return the gets
    //return name
    getName() {
        return this.name;
    };
    //return id
    getId() {
        return this.id;
    };
    //return email
    getEmail() {
        return this.email;
    };
    //return employee
    getRole() {
        return "Employee";
    };

};

module.exports = Employee;