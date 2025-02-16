/*
--
--
052. Accessing Object Properties in Javascript
--
https://youtu.be/ls80JBqgIOw?feature=shared
--
*/

const obj = { a: 1, b: 2, c: 3, d: 4 };

console.log(obj.a + obj.c);
const num = 'b'
console.log(obj[num]); // use array notation when the key is unknown.

console.log(obj.num); // undefined