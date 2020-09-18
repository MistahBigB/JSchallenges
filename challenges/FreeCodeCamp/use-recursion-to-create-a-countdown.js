// Only change code below this line
var countArray = [];
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    countArray.push(n);
    countdown(n - 1);
    return countArray;
  }
}
// Only change code above this line
