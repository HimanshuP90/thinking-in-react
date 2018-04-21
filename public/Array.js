// let projects = ['Learn Spanish', 'Learn Go', 'Learn Erlang', "Learn Malayalam", "Learn Tamil"];
// console.log(projects);
// console.log("pop() : ", projects.pop());
// console.log("shift() : ", projects.shift());

/*


push(): can append one or more elements to the end of an array i.e this alters the array on which the
		method was called

pop(): pulls the last element off of the given array and returns it. i.e this alters the array on which the
		method was called

If you call pop() on an empty array, it returns an undefined value.

unshift(): The unshift() method can prepend one or more elements to the beginning of an array.

shift(): The shift() method pulls the first element off of the given array and returns it.

Notes: 
1) Every variable or function declaration you bring to the top of its current scope is called hoisting
2) How do you check if an object is an array or not?
	 Object.prototype.toString.call(arrayList) === '[object Array]'
*/

var x; //declaring x
console.log(x); // output: undefined


// var y = 1; //declaration and definition, also initialisation
// console.log(y)

// console.log(z); //output: Uncaught ReferenceError: z is not defined

/*
var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y);

 */

 /*
	Write a mul function which will produce the following outputs when invoked
	console.log(mul(2)(3)(4)); //output: 24

function mul(x) {
	return function (y) { // anonymous function 
		return function (z) { // anonymous function 
			return function (i) { // anonymous function 
				return x * y * z * i;
			}
		};
	};
}


 console.log(mul(5)(4)(3)(2));

*/


var arrayList =  ['a','b','c','d','e','f'];
// var anotherArrayList = arrayList;
// arrayList = [];
// console.log(anotherArrayList)

// arrayList.length = 0;

// var anotherArrayList = arrayList;
// arrayList.splice(0, arrayList.length);

// while(arrayList.length) {
// 	arrayList.shift();
// }
	console.log(arrayList);
	var fn = function() {
		console.log("Himanshu Pandey");
	}

console.log(Object.prototype.toString.call(arrayList) === '[object Array]')



var xx = { foo : 1 };
var output = (function() {
	delete xx.foo;	//The delete operator is used to delete properties from an object.
	return xx.foo;
})()

console.log(output);

var Employee = {
	company: 'xyz'
}

var emp1 =  Object.create(Employee);
delete emp1.company;
// emp1 object has company as its prototype property. The delete operator doesn't delete prototype property.

console.log(emp1)
console.log(emp1.__proto__.company)