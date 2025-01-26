/*
--
--
009. JS Basic Numbers 
--
https://youtu.be/5wxf-e64IhQ?feature=shared
--
*/

// js case sensitive

// integer (4) (54 bit storage) and floating point (4.23) (64 bit storage) numbers are considered same Floating in JavaScript

const number = 5;
const num2 = Number('2.33'); // number constructor

console.log(num2);
console.log(Number.parseInt(num2));
console.log('eee' - 'el');
console.log('eee' + 'el');

// hexadecimal

console.log(0x1a); // 26

// binary

console.log(0b1010); // 10

// octal

console.log(0o12); // 10

// scientific notation

console.log(1e3); // 1000

console.log(1e-3); // 0.001

// rounding

console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(-4.5)); // -4
console.log(Math.round(-4.4)); // -4

