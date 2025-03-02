/*
--
--
094. Scope Chain in Javascript
--
https://youtu.be/6huOVzX7BqU?feature=shared
--
*/


function a() {
  let d = 'hello';
  function b() {
    let c = 'world';
    console.log(d);
  }
  // console.log(c); // error
  b();
}
a();

// access
