/*
--
--
072. Callback Function in Javascript
--
https://youtu.be/m2JQ_RqzfXg?feature=shared
--
*/
function callBack(a, b, func) {
  let c = a + b;
  let d = a - b;
  let res = func(c, d);
  return res;
}
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

console.log(callBack(4, 2, sub));
console.log(callBack(4, 2, sum));
let result2 = callBack(4, 2, function (a, b) {
  return a * b;
});
console.log(result2);
