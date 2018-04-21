
// Human constructor
function Human(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function() {
		return this.firstName + this.lastName;
	}
}


// create object person1 person2 using human constructors

var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");

Human.prototype.name = "Himanshu Pandey";