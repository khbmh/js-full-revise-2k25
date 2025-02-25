/*
--
--
069. First Class Function in Javascript
--
https://youtu.be/xNtPY_RsEus?feature=shared
--
*/

function add(a, b) {
  return a + b;
}

// 1. a function can be stored in a variable
const sum = add;
console.log(sum(5, 2));

// 2. a function can be stored in an array
const arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](2, 3));

// 3. a function can be stored in an object
const obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(4, 5));

// 4. we can create function as need
setTimeout(function() {
  console.log(
    'hello world'
  );
}, 2000)


