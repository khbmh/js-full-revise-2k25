/*
--
--
068. Pure Functions in Javascript
--
https://youtu.be/pOcNXZlhhMU?feature=shared
--
*/
// `Pure function:`
// `It returns the same result if the given arguments are same`
// `* it does not cause any observable side effects`

function sqrt(n) {
  return n * n;
}
console.log(sqrt(8));

// `Impure function:`

let counter = 0;
function incrementCounter() {
  return (counter += 5);
}
incrementCounter();
console.log(counter); // 5
incrementCounter();
console.log(counter); //10

let point = { x: 22, y: 23 };
function pinPoint(point) {
  point.x = 4;
  point.y = 5;
  console.log(point);
}
pinPoint(point);