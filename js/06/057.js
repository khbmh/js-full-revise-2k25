/*
--
--
057. Object Methods in Javascript
--
https://youtu.be/rCpqHR5FzBI?feature=shared
--
*/
const obj = { a: 1, b: 2, c: 3, d: 4 };

// Object.keys() returns an array of keys

console.log(Object.keys(obj)); // [ 'a', 'b', 'c', 'd' ]

// Object.values() returns an array of values

console.log(Object.values(obj)); // [ 1, 2, 3, 4 ]

// Object.entries() returns an array of [key, value] pairs

console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

// Object.assign() copies all enumerable properties from one or more source objects to a target object

const obj2 = { e: 5, f: 6 };

console.log(Object.assign(obj, obj2)); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// Object.getOwnPropertyNames() returns an array of all own (non-inherited) property names of a given object

console.log(Object.getOwnPropertyNames(obj)); // [ 'a', 'b', 'c', 'd' ]

// Object.getOwnPropertySymbols() returns an array of all own (non-inherited) symbol properties of a given object

console.log(Object.getOwnPropertySymbols(obj)); // []

const objP = { no: 1, name: 'like', value: 'like' };
const objQ = Object.assign({}, objP)

objP.name = 'hello'

console.log(objP);
console.log(objQ);