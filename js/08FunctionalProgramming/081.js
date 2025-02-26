/*
--
--
081. Currying in Javascript
--
https://youtu.be/Viw6rpxwZeM?feature=shared
--
*/

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(3, 4, 2));

//curring

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(2)(4)(5));

// design pattern
