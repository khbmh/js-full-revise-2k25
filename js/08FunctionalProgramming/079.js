/*
--
--
079. Return Function from Another Function in Javascript
--
https://youtu.be/P-FFczi-giM?feature=shared
--
*/

function greet(msg) {
  function greetings(name) {
    return msg + '! ' + name;
  }
  return greetings;
}

let gm = greet('hello');
console.log(gm());
console.log(gm('mango'));
console.log(greet('good night')('alex'));
console.log(typeof gm);

function base(b) {
  var result = b;
  return function (p) {
    for (let i = 1; i < p; i++) {
      result *= b;
    }
    return result;
  };
}

console.log(base(2)(5));

const base3 = base(3);

console.log(base3(13));
