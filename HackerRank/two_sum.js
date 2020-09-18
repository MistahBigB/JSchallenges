//for some array nums, find the index values of the two values that add up to the target number
//in this case, the target is 6
var nums = [3,2,4];
let number = [];

var twoSum = (nums, target) => {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                number.push(i, j)
                return number
            }
        } 
    } 
//console.log(number)
} 

twoSum(nums, 6)
