/*
--
--
029. JS For Loop
--
https://youtu.be/gDy15jOZQ1Y?feature=shared
--
*/
let sum = null;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(sum, '+', i, '=', sum + i);
    sum += i;
  }
}
console.log(sum);
