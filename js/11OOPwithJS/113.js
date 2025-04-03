/*
--
--
113. Constructor Property in Javascript
--
https://youtu.be/kAUptUeN3Gg?feature=shared
--
*/

let obj = {
  name: 'John',
  age: 30,
};

// console.log(obj);

let obj2 = new Object();

const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log('i am a rectangle');
    this.properties();
    console.log(this); // current object
  };
  this.properties = function () {
    console.log('my width is', this.width);
    console.log('my height is', this.height);
  };
};

const rect1 = new Rectangle(22, 55); //
// check below lines in browser console
// obj.constructor
// rect1.constructor

let str = new String('str');

console.log(str.constructor); // String()

console.log('my string is ' + str); // String

console.log(str.constructor === String); // true