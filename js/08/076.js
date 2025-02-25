/*
--
--
076. Reduce Function in Javascript
--
https://youtu.be/YAvJVcVKwu8?feature=shared
--
*/

let arr = [1, 2, 4, 3];

let reduced = arr.reduce(function (p, c) {
  return p + c;
}, 0);

console.log(reduced);

function reducer(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
let reducedFun = reducer(
  arr,
  function (p, n) {
    return p * n;
  },
  1,
);

console.log(reducedFun);
