/*
--
--
110. Constructor Pattern in Javascript
--
https://youtu.be/DB-dN4TtYD0?feature=shared
--
*/

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

const rect1 = new Rectangle(22, 55);
// console.log('hello');
rect1.draw();

// console.log(rect1);
console.log(this); // window object
