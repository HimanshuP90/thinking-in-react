/*
	Selection sort: The selection sort algorithm sorts an array by repeatedly finding the 
	minimum element (considering ascending order)from unsorted part and putting it at the beginning.
	Time Complexity: O(n2) as there are two nested loops.
	
*/

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function swap(array, i, j) {
	console.log('array[j] :',  array[j])
	console.log('array[i] :', array[i]);
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function selectionSort(array) {
	for( var i = 0; i < array.length; i++) {
		var min = i;
		for( var j = i+1; j< array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}

		if (i != min) {
			swap(array, i, min);
		}
	}
	return array;	
}

console.log(selectionSort(array));
