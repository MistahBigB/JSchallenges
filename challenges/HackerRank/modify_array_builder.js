let arr = [];
//populates an array from n to 1
let arrayBuilder = (n) => {
    for (n; n > 0; n--) {
        arr.push(n)
    } 
 return arr;
}
//populates an array from 1 to n
//let arrayBuilder = (n) => {
//    for (let j = 1; j <= n; j++) {
//        arr.push(j)
//    } 
// return arr;
//}

//iterates through array arr
//multiplies even numbers by 2 and pushes arr
//multiplies odd numbers by 3 and pushes to arr
//splices off the original arr values, returns arr with only new values
let modifyArray = (arr) => {
    const origLen = arr.length;
    for (let i = 0; i < origLen; i++) {
      let calc;
      if (arr[i]%2 === 0) {
        calc = arr[i]*2;
        arr.push(calc)
      } else {
        calc = arr[i]*3;
        arr.push(calc)
      }
} 
arr.splice(0, origLen)
return arr;
}

modifyArray(arrayBuilder(5));
