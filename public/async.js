/* 

	AJAX Request: communicate with a server by making a http request.(Asynchronous JavaScript and XML)
							no need to relaod page

*/
// window.onload = function() {
// // 	var http = new XMLHttpRequest();
// // 	http.onreadystatechange = function(){
// // 		if (http.readyState == 4 && http.status == 200) {
// // 			console.log(JSON.parse(http.response));
// // 		}
// // 	};

// // 	http.open("GET", "manifest.json", true);
// // 	http.send();
// // 	console.log('test');

// 	$.get("./manifest.json", function(data){
// 		console.log(data);
// 	})

// };


// // $.get("manifest.json", function(data){
// // 	console.log(data);
// // })


//Synchonous callback
	// window.onload = function(){

	// 	function callback(val){
	// 		console.log(val);
	// 	}

	// 	var fruits = ['Apple', 'banana', 'Graps', 'Litchi', 'Guavava', 'Mango'];
	// 	fruits.forEach(callback);
	// 	console.log('Done ..!!!')
	// };

//Asynchonous callback
// window.onload = function(){
// 	function printString(string){
// 	  setTimeout(
// 	    () => {
// 	      console.log(string)
// 	    }, 
// 	    Math.floor(Math.random() * 100) + 1
// 	  )
// 	}
// 	function printAll(){
// 	  printString("A")
// 	  printString("B")
// 	  printString("C")
// 	}
// 	printAll()
// };

//Callback: A callback function that is passed to another function, When the first function
			// is done, it will run the second function
// window.onload = function(){
// 	function printString(string, callback){
// 	  setTimeout(
// 	    () => {
// 	      console.log(string)
// 	      callback()
// 	    }, 
// 	    Math.floor(Math.random() * 100) + 1
// 	  )
// 	}
// 	function printAll(){
// 	  printString("A", () => {
// 	  	printString("B", () => {
// 	  		printString("C", () => {})
// 	  	})
// 	  })
// 	}
// 	printAll()
// };

// Promises: try to fix nesting problems

window.onload = function(){
function printString(string){
	return new Promise((resolve, reject) => {
		setTimeout(
			() => {
				console.log(string)
				resolve()
			},
			Math.floor(Math.random() * 100) + 1
		)
	})
}
	function printAll(){
		printString("A")
		.then(() => {
			return printString("B")
		})
		.then(() => {
			return printString("C")
		})
	}

	printAll()
}