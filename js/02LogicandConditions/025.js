/*
--
--
025. JS Logical Operators
--
https://youtu.be/fg5Rx88nWcU?feature=shared
--
*/
// Logical AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Logical OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Logical NOT (!)
console.log(!true); // false
console.log(!false); // true

// Example with conditions:
let x = 5;
let y = 10;

console.log(x > 3 && y < 15); // true (both conditions are true)
console.log(x > 3 || y > 20); // true (one condition is true)
console.log(!(x < 3)); // true (negation, x is not less than 3)
