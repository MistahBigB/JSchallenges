/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
let getSecondLargest = (nums) => {
  // removes duplicates in the array
  nums = nums.filter((c, index) => {
    return nums.indexOf(c) === index;
});
  //sort the integers in the array in ascending order
  nums.sort(function(x,y){ 
    return x-y
})
  //instead of looking for the penultimate element
  //look for the second
  return nums.reverse()[1]
}
