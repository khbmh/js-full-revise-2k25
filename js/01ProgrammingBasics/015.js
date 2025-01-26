/*
--
--
015. JS Operators 
--
https://youtu.be/YDpztesEdAU?feature=shared
--
*/
// arithmetic operators
// + - * / % ++ -- **

console.log(5 + 3); // 8
console.log(5 - 3); // 2
console.log(5 * 3); // 15
console.log(5 / 3); // 1.6666666666666667
console.log(5 % 3); // 2
console.log('power', 5 ** 3); // 2

// increment and decrement operators

let counter = 0;
counter++; // counter = counter + 1;
console.log(counter); // 1

counter--; // counter = counter - 1;

console.log(counter); // 0

// assignment operators
// = += -= *= /= %=
let b = 6;
let c = 4;
console.log('here', (b %= c));
