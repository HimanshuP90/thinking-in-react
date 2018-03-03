(function(){

function Employee(name) {
	this.name = name;
}


var emp1 = new Employee("Himanshu");
var emp2 = new Employee("Sudhanshu");
var emp3 = new Employee("Gudyia");

Employee.prototype.greet = function(){console.log("Hey I'm prototype")};

console.log(emp1.greet())
console.log(emp2.greet())
console.log(emp3.greet())

console.log(emp1.__proto__.constructor);

})()