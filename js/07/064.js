/*
--
--
064. Function Expression in Javascript
--
https://youtu.be/MMTLMVWKzi8?feature=shared
--
*/
const addition = function (a, b) {
  return a + b;
};

setTimeout(function () {
  console.log('Hello from a 3s setTimeout function');
}, 3000);

const sum = addition;

console.log(sum(3, 4)); // 7
console.log(sum);
