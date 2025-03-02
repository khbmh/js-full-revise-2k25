/*
--
--
96. Closure and Loops in Javascript
--
https://youtu.be/ecwtU-YASAc?feature=shared
--
*/

for (var i = 1; i < 6; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}
