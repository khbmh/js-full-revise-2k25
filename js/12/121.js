/*
--
--
121. Prototype and Prototypical Inheritance in Javascript
--
https://youtu.be/eab3Q1OyCTU?feature=shared
--
*/

console.log('hello');

// prototype is parent class (every object has a prototype)

let obj = {};
let obj2 = new Object();
console.log(obj);
console.log(obj2);

console.log(obj.__proto__ === obj2.__proto__); // true

console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj2));
console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2)); // true
