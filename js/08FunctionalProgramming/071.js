/*
--
--
071. Closure First Look in Javascript
--
https://youtu.be/kVxsWPEzhAc?feature=shared
--
*/

let b = 22;
function a(){
  let x = 11;
  return function(){
    console.log(x);
    // console.log(b);
  }
}
let abc = a()
console.dir(abc);