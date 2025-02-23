/*
--
--
061. Function Arguments and Parameters in Javascript
--
https://youtu.be/YTC2OOYr8fA?feature=shared
--
*/

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 10)); // 15
console.log(sum(15, 20)); // 35

const arr1 = [1, 2, 3, 4, 5];

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum(arr1)); // 15
