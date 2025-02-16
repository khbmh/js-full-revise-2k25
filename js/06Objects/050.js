/*
--
--
050. JS Object
--
https://youtu.be/bS0hd6plTF4?feature=shared
--
*/

// Creating an object
let person = {
  name: 'John', // Key: name, Value: John
  age: 30, // Key: age, Value: 30
  greet: function () {
    // Key: greet, Value: a function
    console.log('Hello, ' + this.name);
  },
};

// Accessing object properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Calling an object's method
person.greet(); // Output: Hello, John

// Adding a new property to the object
person.job = 'Developer';

// Updating an existing property
person.age = 31;

// Deleting a property
delete person.job;

console.log(person); // Output: { name: 'John', age: 31, greet: [Function: greet] }
