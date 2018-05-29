
/*const btn = document.querySelector(".btn");

btn.addEventListener("click", function(e) {
	console.log("Button is clicked... Bingo ..!");
})

function test() {
	for (let i = 0; i < 2000; i++) {
		console.log("Count : " + i);
	}
}

test();




Synchronous example i.e. single threaded js engine
60fps and Device Refresh Rates


*/

/*

function fn() {
	console.log("fn print here")
}

let timer = setInterval(fn, 1000)

console.log("print via main thread")
console.log("print via main thread")

const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
	window.clearInterval(timer);
})


*/

/* 

setTimeout((param1, param2, param3, param4) => {
	console.log("Himanshu", param1, param2, param3, param4);

}, 0, "expect some value", 300, [123], {key: value})

console.log("Software");


for (let i = 0; i < 7; i++){
	console.log(i);
}


*/

/*
function add(num1, num2) {
	return num1 + num2;
}
 
function addAsync(num1, num2, fn) {
	setTimeout(() => {
		fn(num1 + num2)
	}, 0)
}

without promies

addAsync(11, 11, function(result){
	console.log("Result add async: ", result)
})

*/

/*

using Promise

function addAsyncPromises(num1, num2) {
	return new Promise(function(resolve, reject){
		resolve(num1 + num2);
	})
}


const addPromises = addAsyncPromises(11, 13);
addPromises.then(function(result){
	console.log("Result add async using Promies: ", result)
})

*/


/*

using asyn-await

async function addAsyncAwait(num1, num2) {
	const result =  await num1 + num2;
	return result;
}


const addAsync_asyncawait = addAsyncAwait(23, 12);
addAsync_asyncawait.then(function(result){
	console.log("Result add async using Async-await: ", result)
})



const result = add(11, 11);
console.log("Without async result: " , result);

console.log("After excuting main thread")


*/




function promiseConstrcuctor(resolve, reject) {
	const btn = document.querySelector(".btn");
	btn.addEventListener("click", function(e){
		console.log("Button clicked");
		resolve(100);
	})
}

const promise = new Promise(promiseConstrcuctor);

promise.then((value) => {
	console.log("Promise fullfilled with value: ", value);
})

promise.then((value) => {
	console.log("Promise fullfilled with value: ", value);
})