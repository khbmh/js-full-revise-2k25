/*
--
--
122. Multi Level Inheritance in Javascript
--
https://youtu.be/Le-_O1n_iZY?feature=shared
--
*/
let arr = [];
let str = '';
console.log(arr);
let obj = {};
console.log('arr', arr.__proto__.__proto__ === obj.__proto__); //true
console.log('str', str.__proto__.__proto__ === obj.__proto__); //true
console.log(arr.__proto__ === obj.__proto__); //false
console.log(obj.__proto__);
