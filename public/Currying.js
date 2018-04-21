 /*
	Currying: currying is the process of breaking down a function into a series of functions that
						each take a single argument.
  Closure: A closure is the combination of a function and the lexical environment
  				 within which that function was declared. -------MDN
  instanceof:  operator checks the current object and returns true if the object is of the specified type;

*/

var addTwo = function(a, b) {
	console.log(`${a} + ${b} = ${a+b}`);
}

// addTwo(4,5);


var add2 = function(a) {
	return function(b) {
		console.log(`${a} + ${b} = ${a+b}`);
	}
}

// add2(4)(8);

/*
var add7 = add2(7);
add7(9);
var add8 = add2(8);
add8(10);
add7(12); */

/*
	Number + Number -> Addition
	Boolean + Number -> Addition
	Number + String -> Concatenation
	String + Boolean -> Concatenation
	String + String -> Concatenation
*/

/*
var bar = true; //boolean
console.log(bar + 0);
console.log(bar + "xyz");
console.log("syz" + "syz");
console.log(1 + "syz");
console.log(bar + 99); */

