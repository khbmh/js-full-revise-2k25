/*
--
--
108. "THIS" in Javascript
--
https://youtu.be/ro9x3SVucDY?feature=shared
--
*/

// object er nijer property mean kore ==> this || otherwise window object

const rect = {
  width: 50,
  height: 100,
  draw: function () {
    console.log('i am a rectangle');
    this.printProperties();
  },
  printProperties: function () {
    console.log('my width is', this.width);
    console.log('my height is', this.height);
  },
};

const rect2 = {
  width: 100,
  height: 200,
  draw: rect.printProperties,
};
// console.log(r);

rect2.draw();
