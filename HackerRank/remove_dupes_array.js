//let nums be some sorted array with duplicates
let nums = [1,1,2];
//let nums = [1,1,2,3,4,4,4,5,6,7,8,9,9,9]

nums = nums.filter((c, index) => {
    return nums.indexOf(c) === index;
});

console.log(nums);

//For alternate solutions, visit:
//https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
