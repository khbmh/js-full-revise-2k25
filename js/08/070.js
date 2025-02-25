/*
--
--
070. Higher Order Function in Javascript
--
https://youtu.be/jkPB1jAJWfU?feature=shared
--
*/
function add(a, b) {
  return a + b;
}

// 1. we can pass function as an argument
// 2. we can return function from another function
function manipulate(a, b, fun) {
  let c = a + b;
  let d = a - b;
  return fun(c, d);
}

console.log(manipulate(4, 2, add));
