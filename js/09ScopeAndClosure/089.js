/*
--
--
089. Hoisting in Javascript | JS All You Need To Know
--
https://youtu.be/fo3fvEXMM60?feature=shared
--
*/

let val = 22;

// newVal(12);

let newVal = showValue;
newVal(32);

function showValue(val) {
  console.log(val);
}

showValue(44)
