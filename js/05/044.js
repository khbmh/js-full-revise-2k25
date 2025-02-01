/*
--
--
044. JS Array Traversing
--
https://youtu.be/QK9j4818rdQ?feature=shared
--
*/
let arr = [2, 3, 4, 5, 8, 9, 10, 11];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  // sum += arr[i]
  if (arr[i] % 2 !== 0) {
    sum += arr[i];
  }
}
console.log(sum);
// console.log(arr);
