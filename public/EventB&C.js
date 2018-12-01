/*
	Event Deligation: Event deligation allows us to avoid adding event listeners to specific nodes,
										instead, the event listener is added to one parent.
	Events don't start at the thing you trigger the event on
	i.e. Events Start at the root
	event goes down(Event Capturing Phase)
	event goes up(Event Bubbling Phase)
	true: capture
	false: bubble

	e.stopPropagation()
	source.addEventListener(eventName, eventHandler, true)
*/


var clickButton = document.querySelector("#buttonOne");
clickButton.addEventListener("click", showAlert, "true")


					Window(click event start here)
						|
					document
						|
					 html
						|
					 body
					 	|
			one_a   one_b
				|
			 two
			  |
 three_a three_b
 		|					|
buttonOne  buttonTwo
 (onClick)



 // example

<ul id="parent-list">
 	<li id="post-1">Item 1</li>
 	<li id="post-2">Item 2</li>
 	<li id="post-3">Item 3</li>
 	<li id="post-4">Item 4</li>
 	<li id="post-5">Item 5</li>
 	<li id="post-6">Item 6</li>
 	<li id="post-7">Item 7</li>
 	<li id="post-8">Item 8</li>
	<li id="post-9">Item 9</li>
 	<li id="post-10">Item 10</li>
</ul>

document.getElementById("parent-list").addEventListener("click", function(e){
	if (e.target && e.target.nodeName == "LI") {
		console.log("List item ", e.target.id, "was clicked!");
	}
})