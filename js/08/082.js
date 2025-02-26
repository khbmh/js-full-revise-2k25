/*
--
--
082. Function Composition in Javascript
--
https://youtu.be/KMNNv2hK7S4?feature=shared
--
*/

// a functions output to be passed as another functions input

function multiply(n) {
  return n * 5;
}

function sum(a, b) {
  return a + b;
}

console.log(multiply(sum(7, 3)));
