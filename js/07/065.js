/*
--
--
065. Inner Function in Javascript
--
https://youtu.be/xyu7o21xj1w?feature=shared
--
*/

function outer(greet, name) {
  function inner() {
    if (name) {
      const nickname = name.split(' ')[0];
      return nickname;
    } else {
      return '';
    }
  }

  return greet + ' ' + inner();
}

console.log(outer('Hello', 'John Doe')); // Output: Hello John
