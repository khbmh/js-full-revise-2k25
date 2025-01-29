/*
--
--
040. JS String Methods
--
https://youtu.be/zpp_8V0cxZk?feature=shared
--
*/
// String length - Returns the number of characters in a string
let str = 'Hello, World!';
console.log(str.length); // Output: 13

// String charAt(index) - Returns the character at the specified index
console.log(str.charAt(0)); // Output: H

// String charCodeAt(index) - Returns the Unicode value of the character at the given index
console.log(str.charCodeAt(0)); // Output: 72 (Unicode for 'H')

// String at(index) - Returns the character at the given index (similar to charAt but supports negative indexes)
console.log(str.at(-1)); // Output: !

// String [index] - Accesses characters using bracket notation (like an array)
console.log(str[0]); // Output: H

// String slice(start, end) - Extracts a section of a string and returns it as a new string
console.log(str.slice(0, 5)); // Output: Hello

// String substring(start, end) - Similar to slice, but doesn't support negative indexes
console.log(str.substring(0, 5)); // Output: Hello

// String substr(start, length) - Extracts part of a string, starting at a specified index and of a given length
console.log(str.substr(7, 5)); // Output: World

// String Search Methods
console.log(str.indexOf('World')); // Output: 7
console.log(str.includes('Hello')); // Output: true
console.log(str.startsWith('Hello')); // Output: true
console.log(str.endsWith('!')); // Output: true
console.log(str.match(/World/)); // Output: ["World", index: 7, input: "Hello, World!", groups: undefined]
console.log(str.search('World')); // Output: 7
/*
The matchAll() method returns an iterator of all results matching a given regular expression, including capturing groups. Unlike match(), which only returns the first match or an array of all matches without capturing groups, matchAll() provides detailed match objects.
*/
let text = 'I love JavaScript and Java is cool!';
let regex = /Java\w*/g;

let matches = [...text.matchAll(regex)];

console.log(matches);
/*
Output:
[
  ["JavaScript", index: 7, input: "I love JavaScript and Java is cool!", groups: undefined],
  ["Java", index: 22, input: "I love JavaScript and Java is cool!", groups: undefined]
]
*/

// String Templates
let name = 'Alice';
console.log(`Hello, ${name}!`); // Output: Hello, Alice!

// String toUpperCase()
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// String toLowerCase()
console.log(str.toLowerCase()); // Output: hello, world!

// String concat()
console.log('Hello'.concat(', ', 'World!')); // Output: Hello, World!

// String trim()
let paddedStr = '   Hello   ';
console.log(paddedStr.trim()); // Output: "Hello"

// String trimStart()
console.log(paddedStr.trimStart()); // Output: "Hello   "

// String trimEnd()
console.log(paddedStr.trimEnd()); // Output: "   Hello"

// String padStart()
console.log('5'.padStart(3, '0')); // Output: "005"

// String padEnd()
console.log('5'.padEnd(3, '0')); // Output: "500"

// String repeat()
console.log('Ha'.repeat(3)); // Output: "HaHaHa"

// String replace()
console.log(str.replace('World', 'Universe')); // Output: Hello, Universe!

// String replaceAll()
console.log('apple apple apple'.replaceAll('apple', 'banana')); // Output: banana banana banana

// String split()
console.log(str.split(', ')); // Output: ["Hello", "World!"]

// String localeCompare() - Compares two strings lexicographically
console.log('apple'.localeCompare('banana')); // Output: -1

// String normalize() - Normalizes a string using Unicode normalization forms
let accented = 'é';
console.log(accented.normalize('NFD')); // Output: "é"
