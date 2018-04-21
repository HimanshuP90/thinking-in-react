/*
  Closure: A closure is the combination of a function and the lexical environment
  		   within which that function was declared. -------MDN
*/



// var a = 10;
// function outer() {
// 	var b = 20;
// 	var inner = function() {
// 		a++;
// 		b++;
// 		console.log(a);
// 		console.log(b);
// 	}
// 	return inner;
// }

// var innerFn = outer();
// innerFn();

// //Explanation
// //a is global 
// //b is in the scope of outer;


// // JS create scope chain, it also remember function scope
// //Clousre: A function which remember its scope . remembers is the scope during the time of declaration and thats

// //Whatever varioable you have created in each excution of function.

// // in first call of function
// // 1 instance of a
// // 1 isntance of b


// var innerFn2 = outer();
// innerFn2();
// // in second call of function
// // 1 instance of a
// // 1 isntance of b

// var innerFn3 = outer();
// innerFn3();



// //Closures In Callbacks
// var a = 10;

// //wait for 1 seconds

// var fn = function() {
// 	console.log(a)
// }

// setTimeout(fn, 1000);

// console.log("Done")

// var a = 10;
// function myFn() {
// 	var b = a;
// 	console.log(b);
// 	c = 'null';
// }

// myFn();
// console.log(c);


// var a = 10;
// function outer() {
// 	var b = 20;
// 	var inner = function () {
// 		console.log(a);
// 		console.log(b);
// 	}
// 	return inner;
// }

// var innerFn = outer();
// innerFn();


//Module Pattern


// function createPerson() {
// 	var firstName = "Himanshu";
// 	var lastName = "Pandey";

// 	var returnObj = {
// 		"getFirstName": function() {
// 			return firstName;
// 		},
// 		"getLastName": function() {
// 			return lastName;
// 		},
// 		"setFirstName": function(name) {
// 			firstName = name;
// 		},
// 		"setLastName": function(name) {
// 			lastName = name;
// 		}
// 	}

// 	return returnObj;
// }

// var person = createPerson();
// console.log(person);
// person.setFirstName("Babu");
// console.log(person.getFirstName())


// Solving async with closures
// var i;

// for ( i = 0; i < 10; i++) {
// 	(function(){
// 		var currentValue = i
// 		setTimeout(function(){
// 			console.log(currentValue);
// 		}, 2000);
// 	})();
//  }


// // var myObj = {};
// // console.log(myObj)

// // setTimeout(console.log("hi"), 2000);

// var arr = [6,5,4,3];
// // console.log(Array.isArray(arr));
// console.log(arr.constructor === Object);


// //1) Check if a value is an object in JavaScript
// var myObj = {
// 	"firstName": "Himanshu",
// 	"age": 27,
// 	"profession": "Software Engineer"
// }
// // console.log(Array.isArray(myObj))
// console.log(myObj.constructor === Object);
// console.log(myObj instanceof Object);
// console.log(Object(myObj) === myObj);
// console.log(myObj.constructor.name === "Object")
// //2) Difference between object and Object in JavaScript

// console.log(Object.prototype.toString.call(myObj) === '[object Object]')
// console.log(Object.prototype.toString.call(arr))
// console.log(typeof Object);

// function foo(){
// }

// foo.prototype.test = "Hi foo";
// foo.prototype.wow = "Himanshu bhai kaise ho";
// console.log(foo());

// var myObj = new foo();
// myObj.__proto__.Pizza = "Could you please order"
// console.log(foo.prototype)
// console.log(myObj.Pizza)


// function Employee(){

// }

// var emp = new Employee();
// console.log(emp.test);


// When we create Employee function then automatically created
// 	1) function name
// 	2) prototype
// When we call new Employee then
// 	emp instance __proto__

// 	goes one lelve inside Object's  prototype


// Object.prototype.grandparentProp = "Grand Parent";
// emp.grandparentProp
// console.log(emp)

// var x7 = "Himanshu";
// var x = new String(x7)
// console.log(typeof x)


// let user = {
// 	name: "John",
// 	age: 30
// };

// console.log(user);

// let clone = {};

// for (let key in user) {
// 	clone[key] = user[key];
// }

// console.log(clone);
// let newClone = {};
// Object.assign(newClone, clone);
// console.log(newClone)

// //Iterative thinking
// function pow(x, n){
// 	let result = 1;
// 	for (let i = 0; i < n; i++){
// 		result *= x;
// 	}
// 	return result;
// }


// function powRec(x, n) {
// 	//base case
// 	if(n == 1)return x;
// 	else return x*powRec(x, n-1);
// }

// console.log(pow(2,3));
// console.log(powRec(2,3));


// let timerId = setTimeout(func|code, delay[, arg1, arg2...])
// console.log(timerId)

// let a = 1;
// if (1 === a) {
// 	let b = 2;
// }

// console.log(a);
// console.log(b);


// Arrow functions

// ([params] [, params]) => {
// 	statements
// }

// param => expression

// (params1, params2) => { blocl}


/*

function foo(x) {
	var tmp = 3;
	function bar(y) {
		console.log(x + y + (++tmp));
	}
	bar(10);
}

foo(2);

Note: This will always log 16 because bar can access the x which was defined as argument
			to foo, and it can also access tmp from foo.

That is a closure. Simply accessing variables outside of your immediate lexical scope creates a closure.

function foo(x) {
	var tmp = 3;
	return function (y) {
		console.log(x + y + (++tmp));
	}
}

var bar = foo(2); //bar is now closure
bar(10);

*/


// When a JavaScript function is invoked, a new execution context is created
