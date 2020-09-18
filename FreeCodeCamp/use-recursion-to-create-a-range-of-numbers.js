var range = [];
function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum) {
    range.push(startNum)
    return range;
  } else {
    range.push(startNum);
    startNum +=1;
    rangeOfNumbers(startNum, endNum)
    return range;
  }
  ;
};
