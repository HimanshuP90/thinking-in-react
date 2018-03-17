var nextGreaterElement = function(findNums, nums) {
	let output = [];

	findNums.forEach(function(i, index){
		const numIndex = nums.indexOf(i);
		let NGE = false;
		for(var j = numIndex+1; j <= nums.length; j++) {
			if(i < nums[j]){
				output.push(nums[j]);
				NGE = true;
				break;
			}
		}
		if (!NGE) {
			output.push(-1)
		}
	})
	return output;
}

var findNums=[4, 1, 2];
var nums=[1, 3, 4, 2];

console.log(nextGreaterElement(findNums, nums));
