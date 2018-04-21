/*
	QuickSort is a Divide and Conquer algorithm.
	It picks an element as pivot and partitions the given array around the picked pivot

	Pivot: last item in array
	Now iterate through the array, if array element is less than pivot then put in left ow right
var arr = [5, 1, 6, 4, 2, 6, 8, 5]

pivot = 5;
left = 1, 4, 2;
right = 5, 6, 6, 4, 8;


[1, 4, 2]

pivot = 2;
left = 1;
right = 3;

return [left, pivot, right];

Worst Case: o(n2)
Best Case: o(nLogn)
Average Case: o(nLogn)

*/


const quickSort = (nums) => {
	const sortedArray = [...nums];

	if (sortedArray.length <= 1) {
		return sortedArray;
	}

	const pivot = sortedArray[sortedArray.length-1];
	const left = []; 
	const right = [];

	for (let i = 0; i < sortedArray.length-1; i++) {
		if (sortedArray[i] < pivot) {
			left.push(sortedArray[i]);
		} else {
			right.push(sortedArray[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log("Before quickSort:  [4, 1, 2, 3, 5] ");
console.log("After quickSort: ", quickSort([4, 1, 2, 3, 5]));