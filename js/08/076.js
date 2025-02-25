/*
--
--
076. Reduce Function in Javascript
--
https://youtu.be/YAvJVcVKwu8?feature=shared
--
*/

let arr = [1, 12, 4, 3, 5];

let reduced = arr.reduce(function (p, c) {
  return p + c;
}, 0);

// console.log(reduced);

function reducer(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
let reducedFun = reducer(
  arr,
  function (p, n) {
    return Math.max(p, n);
  },
  1,
);

// console.log(reducedFun);

let max = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
