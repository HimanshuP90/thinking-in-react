/*
 .bind() : when you want that function to later be called with a certain context, useful in events
 .call() or .apply() : when you want to invoke the function immediately, with modification of the context

*/

var mathLib = {
	pi: 3.14,
	area: function(r) {
		return this.pi * r * r;
	},
	circumference: function(r) {
		return 2 * this.pi * r;
	}
};

console.log(mathLib.area(2));
console.log(mathLib.area.call({ pi: 3.14159 }, 2));
console.log(mathLib.area.apply({ pi: 3.14159 }, [21,4]));

/*
	call function takes two arguments:
		1) Context
		2) Function arguments

	A context is an object that replaces this keyword inside the area function.
 */


var newVolume = mathLib.circumference.bind({pi: 3.14159});
console.log(newVolume(12, 6));


/*
 .bind(): When you have particular function that you want to call with a specific 'this' value. also can
 		  use bind to pass a specific object to a function that uses a 'this' reference. 

 ex. function fullName() {
	return `Here this is ${this.first} ${this.last}`;
 }


var person = {first: "Foo", last: "Bar"};
console.log(fullName.bind(person());

*/

