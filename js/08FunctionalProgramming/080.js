/*
--
--
080. Recursive Function in Javascript 
--
https://youtu.be/5eMlqhgb6i0?feature=shared
--
*/

let arr = [1, 2, 3, 4, 5, 6, 7];
function looper(n) {
  if (n === 0) {
    return;
  }
  console.log('hello', n);
  looper(n - 1);
}
// looper(9);

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n * sum(n - 1);
}

// console.log(sum(5));

function arrLoop(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + arrLoop(arr, lastIndex - 1);
}
console.log(arrLoop(arr, arr.length - 1));
