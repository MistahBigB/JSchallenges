const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  let resultDisplayArray = [];

  for (var i = 0; i < 3; i++) {
    let display = (`<li class='text-warning'>${arr[i]}</li>`);
    resultDisplayArray.push(display)

  }
  // Only change code above this line
  
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);