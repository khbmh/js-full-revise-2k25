/*
--
--
036. JS String
--
https://www.youtube.com/watch?v=kg6sFzm7w5c&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=37
--
*/
// Creating a string
let str1 = 'Hello, World!';
let str2 = 'JavaScript is fun!';
let str3 = `This is a template literal`;

// String length
console.log(str1.length); // Outputs: 13

// Accessing characters (indexing starts from 0)
console.log(str1[0]); // Outputs: "H"

// String concatenation
let str4 = 'Hello, ';
let str5 = 'everyone!';
let greeting = str4 + str5; // Concatenation using +
console.log(greeting); // Outputs: "Hello, everyone!"

// Template literals (for embedding expressions or variables)
let name = 'John';
let greetingMessage = `Hello, ${name}!`;
console.log(greetingMessage); // Outputs: "Hello, John!"

// String methods
console.log(str1.toUpperCase()); // Converts to uppercase: "HELLO, WORLD!"
console.log(str2.toLowerCase()); // Converts to lowercase: "javascript is fun!"
console.log(str1.indexOf('World')); // Finds index of substring: 7
console.log(str1.slice(7, 12)); // Extracts part of the string: "World"
console.log(str1.slice(7, -1)); // Extracts part of the string: "World"
console.log(str1.replace('World', 'JavaScript')); // Replaces part of the string: "Hello, JavaScript!"

// String comparison
console.log(str1 === 'Hello, World!'); // true

// Escape characters
let strWithQuote = 'She said, "Hello!"';
console.log(strWithQuote); // Outputs: She said, "Hello!"
