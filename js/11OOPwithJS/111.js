/*
--
--
111. New Keyword in Javascript
--
https://youtu.be/-OqmWA_P1WI?feature=shared
--
*/

// new keyword does three things
// 1. creates an empty object
// 2. binds this
// 3. connects prototypes of the main object and copies it into the newly created empty object

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

function myNew(constructor) {
  let obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.call(arguments);
  constructor.apply(obj, argsArray.slice(1));
  return obj;
}

let rectangle = myNew(Rectangle, 5, 10);

rectangle.draw();
