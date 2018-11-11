/*
	Higher Order Functions: A higher order function that does take at least one of the following:
	1) takes one or more functions as arguments(i.e. procedural parameters)
	2) return function as results
*/


var logger = function() {
	return function(x ) {
		console.log(x);
	} 
}

var test = logger();

var mapple = function(fn , value) {
	fn(value);
}

mapple(test, 11); // take two paramter one is function & other is value
mapple(function(x) {
	console.log(x);
}, 110)

mapple(x => console.log(x), 203)
//i.e. HOC which is return function