/*
--
--
115. Bind, Call, Apply in Javascript
--
--
https://youtu.be/Irb4_0Sheos?feature=shared
*/

function myFun(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

const obj = {
  a: 1,
  b: 2,
};
myFun.call(obj, 3, 4);
const obj2 = {
  a: 10,
  b: 20,
};
myFun.apply(obj2, [30, 40]);

const obj3 = {
  a: 100,
  b: 200,
};
const myBind = myFun.bind(obj3)

myBind(300, 400);

//

//

//

// Bind method: Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const person = {
  name: 'John Doe',
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, ${this.name}! ${punctuation}`);
  },
};

// person.greet('hello', '.')

const greetJohn = person.greet.bind(person, 'Hello', '!');

greetJohn(); // Hello, John Doe! !

// Call method: Calls a function with a given `this` value and arguments provided individually.

person.greet.call(person, 'Hello', '!'); // Hello, John Doe! !

// Apply method: Calls a function with a given `this` value and arguments provided as an array.

person.greet.apply(person, ['Hello', '!']); // Hello, John Doe! !

// Bind, Call, and Apply are useful for creating reusable functions, especially when dealing with callbacks or event listeners.
