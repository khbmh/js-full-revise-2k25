/*
--
--
045. Array Insert Remove and Replace
--
https://youtu.be/BknqwAu5Rz4?feature=shared
--
*/
let arr = [2, 3, 4, 5, 8, 9, 10, 11];

// arr.unshift(1)
// arr.push(3)
// console.log(arr);
arr.splice(4, 0, 6, 7); //[position-4, how many will be replaced-0, who will be inserted-6, who will be inserted-7,...]
console.log(arr);
// arr.pop()
// arr.shift()
arr.splice(4, 2);

console.log(arr);
