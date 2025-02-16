/*
--
--
051. JS Object Literal vs Constructor 
--
--
https://youtu.be/g3jZqtK-fDE?feature=shared
*/

const obj = {};

obj.Name = 'main 1';

console.log(obj);

const obj2 = {
  Name: 'main 2',
  age: 22,
};

console.log(obj2);

const obj3 = Object()

obj3.Name = 'main 3';

console.log(obj3);

// console.log(typeof obj3);