/*
--
--
116. Pass By Value vs Pass By Reference in Javascript
--
https://youtu.be/DyZwXcSsYtU?feature=shared
--
*/
console.log('hello');

let a = 11;

function change(a) {
  a += 10;
  return a;
}

console.log(change(a)); // 21
console.log(a); // 11

let obj = {
  a: 11,
};
function objChange(obj) {
  (obj.a += 10), console.log(obj);
}

objChange(obj); // { a: 21 }
console.log(obj); // { a: 21 }
