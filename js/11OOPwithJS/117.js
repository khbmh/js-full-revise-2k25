/*
--
--
117. Abstraction in Javascript
--
https://youtu.be/nkIVqb3D_hE?feature=shared
--
*/

// hiding properties from the user

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

let rect1 = new Rectangle(22,11)
// console.log(rect1.properties());
rect1.properties()  