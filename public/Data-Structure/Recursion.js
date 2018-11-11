// function factorializeRecusrsively(num){
// 	if (num === 0) {
// 		return 1;
// 	}
// 	return (num * factorializeRecusrsively(--num))
// }

// factorializeRecusrsively(5);


/*

Reverse an array
input: [4, 6, 2]
output: [2, 6, 4]

*/

var ar = function(arr) {
	//new array
	var result = [];
	var push = function(arr) {
		if (arr.length > 0) {
			result.push(arr.pop());
			push(arr);
		}
		return;
	}
	push(arr)
	return result;
}


console.log(ar([4,6,2]));