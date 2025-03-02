/*
--
--
092. Nested Scope in Javascript
--
https://youtu.be/KZ8WpqVXG4Y?feature=shared
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
