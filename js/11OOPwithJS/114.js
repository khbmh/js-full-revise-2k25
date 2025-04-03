/*
--
--
114. Functions Are Object in Javascript
--
https://youtu.be/3qitu-Sjx2E?feature=shared
--
*/

function test() {
  console.log('let');
}
test();
console.log(test.length, test.name);

let rect = new Function(
  'width',
  'height',
  `this.width = width;  
  this.height = height;
  this.draw = function () {
    console.log('i am a rectangle');
    this.properties();
    console.log(this); // current object
  };
  this.properties = function () {
    console.log('my width is', this.width);
    console.log('my height is', this.height);
  };`,
);

let rect1 = new rect(22, 55);
// rect1.draw();
