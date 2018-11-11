/*
	Bubble-Sort: bubble-sort is works by repeatdely swapping the adjacent elements if they are in wrong order.
	Worst
	Worst and Average Case Time Complexity: O(n*n) i.e. array is reverse sorted
	Best Case Time Complexity: O(n). Best case occurs when array is already sorted.
	Sorting in place: yes
	stable: yes
*/

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function swap(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function bubbleSort(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[j-1] < array[j]) {
				swap(array, j-1, j);
			}
		}
	}
	return array;
}

console.log(bubbleSort(array));