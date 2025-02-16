/*
--
--
054. Remove Object Properties in Javascript
--
https://youtu.be/K-icBn7l_vA?feature=shared
--
*/

const obj = { a: 1, b: 2, c: 3, d: 4 };

delete obj.a;

console.log(obj); // Output: { b: 2, c: 3, d: 4 }