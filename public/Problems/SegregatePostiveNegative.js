let arr = [1, -1, -3, -2, 7, 5, 11, 6];
let n = arr.length;

function SegregatePostiveNegative(arr, n) {
	let temp = [];
	let j = 0;
	for (let i = 0; i < n; i++) {
		if (arr[i] >= 0) {
			temp[j++] = arr[i];
		}
	}

	if (j == n || j == 0) {
		return;
	}
	console.log(j);

	for (let i = 0; i < n; i++) {
		if (arr[i] < 0) {
			temp[j++] = arr[i];
		}
	}

	console.log(j);

  for (let i = 0; i < n; i++) {
  	arr[i] = temp[i];
  }
  console.log(arr);
}

SegregatePostiveNegative(arr, n);