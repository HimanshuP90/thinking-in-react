/*
 Merge-Sort: It divides input array in two halves, calls itself for the two halves and then merges the two
 						 sorted halves 
 						 i.e.Given an array of size N,
 						 the algorithm recursively breaks the array in half and then merges the results together.

	Firefox and Safari in their implementation of Array.prototype.sort()

Time complexity	 	 
Best: O(n log(n))          	
Average: O(n log(n))
Worst: O(n log(n))
*/

/* var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function mergeSortTopDown(array) {
  if(array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle); 
  var right = array.slice(middle); 

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

function mergeTopDown(left, right) {
	console.log(left)
  var array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

console.log(mergeSortTopDown(array));

*/

  const mergeSort = nums => {
    const sortedArray = [...nums]; 
    if (sortedArray.length < 2) {
      return nums;
    }
    const length = sortedArray.length;
    const middle = Math.floor(length / 2);
    const left = sortedArray.slice(0, middle);
    const right = sortedArray.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left, right) => {
    const results = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        results.push(left.shift());
      }
      else {
        results.push(right.shift());
      }
    }
    return results.concat(left, right);
  };
  
console.log(mergeSort([4, 1, 9, 2]))







/*
  Merge Sort vs Quick Sort

  1) Quick Sort in its general form is an in-place sort(i.e. it doesn't require any extra storage)
  2) Merge Sort requires O(N) extra storgae i.e. N denoting the array size which may be quite expensive

  this: basically where is invoked that's context i.e. where is called not where is created

  fat arrow: then this refer to global variable
*/
















