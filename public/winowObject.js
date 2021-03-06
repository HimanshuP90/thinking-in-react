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


 /* 

Round 1 : 
1) In a matrix (having 0 and 1) if any value is 1 than fill its row and column with 1.
2) Bottom view of a tree.
3) upper view of a tree.


Round 2:
1) Longest Common Sub array;
2) Given String.Find 3rd largest occurring character.
3) Find Maximum Sum sub Matrix in a matrix.

Round 3:

1) Print Matrix in spiral order.
2) Number of islands in a matrix.
3) Design patterns.
4) Hash Map implementation 


 */