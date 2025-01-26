/*
--
--
017. JS Math Functions
--
https://youtu.be/iVgpwXRXjXw?feature=shared
--
*/

// functions are core building blocks of any programming language.

let a = -33.22;
let b = 8.33;
console.log(Math.abs(a));
console.log(Math.round(a));

console.log(Math.floor(Math.random() * 5) + 1);
let arr = [33, 123, 83, 238, 333, 103];
console.log(Math.min(...arr));
console.log(...arr);

console.log('power:',Math.pow(3, 2));

console.log('square root:',Math.sqrt(25));
console.log(Math.PI);
console.log('e^2:',Math.exp(2));