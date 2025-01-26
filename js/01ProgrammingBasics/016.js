/*
--
--
016. JS Statements
--
https://youtu.be/6pOpH_8MWA8?feature=shared
--
*/
// Example of Expressions
let a = 5; // This is an expression (5) assigned to variable a
let b = 10; // This is another expression (10) assigned to variable b
let sum = a + b; // The expression (a + b) evaluates to 15 and is assigned to sum

// Function call as an expression
let result = Math.max(a, b); // Math.max(a, b) is an expression that evaluates to 10

console.log('Sum:', sum); // Output: Sum: 15
console.log('Max:', result); // Output: Max: 10

// Example of Statements
if (sum > 10) {
  // This is a statement that checks if sum is greater than 10
  console.log('Sum is greater than 10'); // This is another statement executed if the condition is true
} else {
  console.log('Sum is not greater than 10'); // Statement executed if the condition is false
}

// Loop statement
for (let i = 0; i < 5; i++) {
  // This is a statement that runs a loop from 0 to 4
  console.log('Iteration:', i); // Statement inside the loop that outputs the current iteration
}

// Variable declaration statement
let x = 20; // This is a statement that declares a variable x and assigns it the value of 20

// all statements can be considered expressions, but not all expressions are statements.
