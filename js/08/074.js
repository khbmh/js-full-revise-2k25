/*
--
--
074. Map Function in Javascript 
--
https://youtu.be/FWgyBeAu-vE?feature=shared
--
*/

const arr = [1, 2, 3, 4];

// arr.map(function (val) {
//   console.log(val + 2);
// });

function myMap(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let val = cb(arr[i], i, arr);
    newArr.push(val);
  }
  return newArr;
}
console.log(
  myMap(arr, function (val) {
   return val += 9;
  }),
);
