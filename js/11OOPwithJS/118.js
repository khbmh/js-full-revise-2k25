/*
--
--
118. Private Properties in Javascript
--
https://youtu.be/v0UasCyAOa0?feature=shared
--
*/
const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  // this.length = 2
  let position = {
    x: 72,
    y: -12,
  };

  let properties = function () {
    console.log('my width is', width);
    console.log('my height is', height);
  };

  // let properties = function () {
  //   console.log('my width is', this.width);
  //   console.log('my height is', this.height);
  // }.bind(this);

  this.draw = function () {
    console.log('i am a rectangle');
    properties();
    console.log('positionX', position.x, 'positionY', position.y);
    console.log(this); // current object
  };
};

let rect1 = new Rectangle(33, 22);
rect1.draw();
