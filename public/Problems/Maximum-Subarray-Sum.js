/*
Given an array consisting of n integers, find the contiguous subarray of given length k that 
has the maximum average value. And you need to output the maximum average value.

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

*/

function findMaxAverage(nums, k){
    let currentMax = 0;
    for(let i = 0; i < k; i++){
        currentMax += nums[i];
    }
    let maxFor = currentMax;
    for (var j = k; j < nums.length; j++) {
		currentMax += (nums[j] - nums[j - k]);
		maxFor = Math.max(currentMax, maxFor);
    }
    return maxFor;
}
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
