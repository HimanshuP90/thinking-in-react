
// 1):  function that doesn't take a parameter and doesn't return  anything 
function sayHello() {
	// console.log("Hello !");
	// console.log("Hi Himanshu !! :-)");
}
let message = sayHello();
// console.log(message);


// Functions are first class objects i.e. they can be assigned to a variable and also bbe passed as a parameter
// HTTP, HTTPS, cookies, local storage

//old way
// const sum = function() {
// 	console.log(arguments);
// 	let result = 0;
// 	for (let i = 0; i <arguments.length; i++) {
// 		result += arguments[i];
// 	}
// 	return result;
// }


const sum = function(...args) {
	console.log(args);
	let result = 0;
	for (let i = 0; i <args.length; i++) {
		result += args[i];
	}
	return result;
}

// console.log(sum(1,23,3));

//Where can IIFE be used?

// (function(){
// 	console.log("Hey u know me, I am IIFE");
// })();

/* It can be used in scenarios where you need to run the function only once,
like fetching some initial data, setting some configuration values,
checking system status on startup etc. */


// Every function has access to three methods
/*
	Call(thisArg, arg1, arg2, ...)
	Apply(thisArg, [arg1, arg2, ...])
	Bind: returns a new method with the new context
*/

let user = {
	userName: "CodingGuru",
	displayName: "Himanshu",
	sendMessage: function(message) {
		// console.log(`Sending ${message} to ${this.displayName}`);
	}
}

let student = {
	displayName: "Pandey"
}


// user.sendMessage("hello .................!!!");
// user.sendMessage.call(student, "Hello from Himanshu");
// user.sendMessage.call(student, ["Hello from Himanshu", "Welcome from Big B"]);


/*
	The bind method returns a new method with the new context.
	For e.g. lets create a new variable that will point to the sendMessage() but with the new context.
	
*/
let sendMessageToStudent = user.sendMessage.bind(student);
sendMessageToStudent("Yet another message");


/*
	Constructor
*/

function User(name, email) {
	//instance variable
	this.name = name; 
	this.email = email;

	//create instance methods	
	this.save = function() {
		this.id = new Date();
		return this.id;
	}
}

// for adding instance methods
User.prototype.saveDB = function() {
	this.id = new Date();
	return this.id;
}

// let userr = new User('Himanshu', 'himanshup895@gmail.com');
// console.log(userr);
// console.log(userr.save());
// console.log(userr.saveDB());
// console.log(userr.email);


let users = [];
for(let i = 1; i <= 100; i++) {
  let user = new User(`user ${i}`);
  user.email = `user${i}@test.com`;
  users.push(user);
}
console.log(users);