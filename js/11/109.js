/*
--
--
109. Factory Pattern in Javascript
--
https://youtu.be/h_h7FDOkl2A?feature=shared
--
*/

const createRect = function (width, height) {
  return {
    width: width,
    height: height,
    draw: function () {
      console.log('i am a rectangle');
      console.log('my width is', this.width);
      console.log('my height is', this.height);
    },
  };
};

const rect1 = createRect(5, 10);
const rect2 = createRect(22, 54)

// rect1.draw();
rect2.draw();