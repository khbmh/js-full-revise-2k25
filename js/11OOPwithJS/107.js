/*
--
--
107. Object Literal in Javascript 
--
https://youtu.be/FYrYOfW2_24?feature=shared
--
*/

const rect = {
  width: 50,
  height: 100,
  draw: function(){
    console.log('i am a rectangle');
    console.log('my width is', this.width);
    console.log('my height is', this.height);
  }
}

rect.draw();

rect.width = 80

rect.draw();