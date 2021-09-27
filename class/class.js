var Employee = /** @class */ (function () {
    
    function Employee(name) {
        this.name = name;
    }
    
    Employee.prototype.display = function () {
        console.log("Employee Name: " + this.name);
    };
    return Employee;
}());
var obj = new Employee("Jai");

console.log("Employee Name: " + obj.name);

obj.display();
