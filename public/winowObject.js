//Javascript: The window object and IIFE
// link: http://mrjoelkemp.com/2013/02/javascript-the-window-object-and-iife/


 // the window object is also the storage medium for user-defined components.
(function(){

var ee = "Himanshu Pandey";
console.log("My Name is", ee);

})();
/*we have an unnamed function that executes immediately.
The inner variable name is declared with the var keyword within a function’s scope,
 so it doesn’t leak to the window object. */

console.log(ee) // undefined
console.log(window.ee) //undefined

If you ever need something (function or data) to be accessible to other scripts,
then (sparingly) attach that function/data to the window object explicitly like so:

(function(){

window.ee = ;
console.log("My Name is", ee);

})();

console.log(ee) // "Himanshu Pandey"
console.log(window.ee) //"Himanshu Pandey"
_____________________________________________________________________________________________________


name = "Himanshu"
console.log(name);

/* The problem with this is that when you declared and defined that variable name,
 it was immediately registered on the window object */