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
