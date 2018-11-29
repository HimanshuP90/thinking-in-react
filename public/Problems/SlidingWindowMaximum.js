function SlidingWindowMaximum(arr, k) {
    const length = arr.length;
    let max;
    for(let i = 0; i <= length-k; i++) {
        max = arr[i];
        for(let j = 1; j < k; j++) {
            if(arr[i+j] > max) {
                max = arr[i+j];
            }
        }
        console.log(max);
    }
}

SlidingWindowMaximum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

// Time Complexity = O((n-k+1)*k) i.e. O(nk)