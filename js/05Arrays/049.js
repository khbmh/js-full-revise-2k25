/*
--
--
049. JS Array Methods
--
https://youtu.be/us0Pq4YhPOI?feature=shared
--
*/

let arr = [2, 3, 4, 5];
let arr2 = [8, 3, 2, 1];

// console.log(arr.join(' | ')); // doesn't change the array
// console.log(arr.fill(true, 0, 2)); // changes the array
console.log(Array.isArray(arr));

let arr3 = arr.concat(arr);
// console.log(arr3);

let a = [3, 1];
let b = Array.from(a);

a[0] = 9;
console.log(a);
console.log(b);
