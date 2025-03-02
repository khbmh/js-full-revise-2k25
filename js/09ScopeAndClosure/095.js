/*
--
--
095. Closure in Javascript
--
https://youtu.be/M46H617M5Lg?feature=shared
--
*/

// closure is when a function is able to remember and access its lexical scope even when that function is executed outside it's lexical scope

function test() {
  let msg = 'I am a closure';
  function inside() {
    console.log(msg);
  }
  inside(); // 'I am a closure'
}

test(); // 'I am a closure'

function close() {
  let msg = 'learning time';
  return function () {
    console.log(msg);
  };
}

let myFunc = close();
close()(); // 'learning time'

myFunc(); // 'learning time'
