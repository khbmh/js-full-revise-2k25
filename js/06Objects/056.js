/*
--
--
056. Iterate Object Properties in Javascript
--
https://youtu.be/TyMrsaDp5gE?feature=shared
--
*/

const obj = { a: 1, b: 2, c: 3, d: 4 };

console.log('a' in obj); // true
console.log('q' in obj); // false

// Using for...in loop

for (const key in obj) {
console.log(key ,':', obj[key]);}

// Using Object.keys() and map()

// console.log(Object.keys(obj).map((key) => [key, obj[key]]));

// Using Object.entries()

// console.log(Object.entries(obj).map(([key, value]) => [key, value]));

// Using destructuring

// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

// Output:
// a 1
// b 2
// c 3
// d 4
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]
// [ 'd', 4 ]
