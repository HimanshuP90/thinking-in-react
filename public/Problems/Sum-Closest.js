/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let ans = nums[0] + nums[1] + nums[2];
    let len = nums.length;
    nums.sort((a, b) => a < b ? -1 : ( a > b) ? 1 : 0);

    for ( let i = 0; i < len; i++) {
        let j = i + 1;
        let k = len - 1;
        
        while ( j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if ( sum === target) return sum;
            if (sum > target) k--;
            if (sum < target) j++;
            if (Math.abs(target - sum) < Math.abs(target -ans)) {
                ans = sum;
            }
        }
    }
    return ans;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));