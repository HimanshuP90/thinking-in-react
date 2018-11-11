/*
	Insertion Sort: Insertion sort is a simple sorting algorithm that works the way
					we sort playing cards in our hands.
	Algo:
	insertionSort(arr, n)
	Loop from i = 1 to n-1.
	……a) Pick element arr[i] and insert it into sorted sequence arr[0…i-1]
  
  Time Complexty: O(n*n)
*/

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
	for (var i = 0; i <array.length; i++) {
		var temp = array[i];
		var j = i-1;
		while(j >= 0 && array[j] >temp) {
			array[j+1] = array[j];
			j--;
		}
		array[j+1] = temp;
	}
	return array;
}

console.log(insertionSort(array));