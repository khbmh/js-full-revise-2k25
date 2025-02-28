/*
--
--
085. Execution Context in Javascript
--
https://youtu.be/MoPW9pxHMkI?feature=shared
--
*/

// global context

// context is actually an object

function a() {
  b()
  console.log('hello from a');
}
function b() {
  c()
  console.log('hello from b');
}
function c() {
  d()
  console.log('hello from c');
}
function d() {
  // a()
  console.log('hello from d');
}

a()
console.log('global citizen');
