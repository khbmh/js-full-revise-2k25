/*
--
--
013. JS Type Conversion
--
https://youtu.be/Ao7BpnAEWJE?feature=shared
--
*/

console.log('4' + 2); // string
console.log('4' - 2); // number

console.log(Number('4') + 2); // number

console.log(Boolean(0)); // false

console.log(Boolean('')); // false

console.log(Boolean('false')); // true

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false

console.log(Boolean(true)); // true

console.log(Boolean(123)); // true

console.log(Boolean('123')); // true

console.log(Boolean('0')); // true

console.log(Boolean(-123)); // true

console.log(Boolean(NaN)); // false

console.log(Boolean('NaN')); // true

console.log(Boolean('hello')); // true
