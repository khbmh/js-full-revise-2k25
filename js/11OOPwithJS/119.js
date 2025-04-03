/*
--
--
119. How to Use Getter Setter in Javascript
--
https://youtu.be/HAPQADxe2SU?feature=shared
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

  // 1st way to get position
  this.getPosition = function () {
    return position;
  };

  // 2nd way to get position - better
  Object.defineProperty(this, 'position', {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
  this.draw = function () {
    console.log('i am a rectangle');
    properties();
    console.log('positionX', position.x, 'positionY', position.y);
    console.log(this); // current object
  };
};

let rect1 = new Rectangle(33, 22);
// rect1.draw();
// console.log(rect1.getPosition());
console.log(rect1.position);

rect1.position = { x: 100, y: 150 };
console.log(rect1.position);
