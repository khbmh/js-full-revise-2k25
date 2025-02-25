/*
--
--
073. Foreach Implementation in Javascript
--
https://youtu.be/1mItbWuvrMw?feature=shared
--
*/

let arr = [1, 2, 3, 4];
let sum = 0;
arr.forEach(function (value, index, array) {
  sum += value;
});
console.log('sum', sum);

function forEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i], i, arr);
  }
}
forEach(arr, function (val) {
  if (val > 3) {
    console.log(val);
  }
});
