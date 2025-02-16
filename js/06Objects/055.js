/*
--
--
055. Comparing Two Objects in Javascript 
--
https://youtu.be/wibCQbDDATY?feature=shared
--
*/

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { a: 1, b: 2, c: 3, d: 4 };


console.log(obj1 === obj2);
// console.log(Object.is(obj1)); // cause two different objects takes different memory locations
// Method 1: Using JSON.stringify()

const jsonString1 = JSON.stringify(obj1);
const jsonString2 = JSON.stringify(obj2);

console.log(jsonString1 === jsonString2); // true

// Method 2: Using Object.is()

console.log(Object.is(obj1, obj2)); // false

// Method 3: Using deepEqual() from lodash

// const _ = require('lodash');

// console.log(_.isEqual(obj1, obj2)); // true

// Method 4: Using JSON.stringify() and deepEqual()

// const jsonString3 = JSON.stringify(obj1);
// console.log(_.isEqual(JSON.parse(jsonString3), obj2)); // true

// Method 5: Using JSON.stringify() and strict equality

const jsonString4 = JSON.stringify(obj1);
console.log(jsonString4 === JSON.stringify(obj2)); // true

// Method 6: Using JSON.stringify() and JSON.parse()

const jsonString5 = JSON.stringify(obj1);
console.log(JSON.parse(jsonString5) === obj2); // false

// Method 7: Using JSON.stringify() and JSON.parse() with deepEqual()

// const jsonString6 = JSON.stringify(obj1);
// console.log(_.isEqual(JSON.parse(jsonString6), obj2)); // true

// Method 8: Using JSON.stringify() and JSON.parse() with strict equality