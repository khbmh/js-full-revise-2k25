/*
--
--
062. Argument Object in Javascript
--
https://youtu.be/pQJf2PY-8Ls?feature=shared
--
*/

function sum() {
  let total = 0;
  for (let number of arguments) {
    total += number;
  }
  return total;
}
const arr = [1, 2, 3];
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum());
console.log(sum(arr)); // 01,2,3 // string
