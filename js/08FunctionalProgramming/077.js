/*
--
--
077. Find and FindIndex Function in Javascript 
--
https://youtu.be/PpfoZeXgaMk?feature=shared
--
*/

let arr = [1, 2, 5, 8, 3];

let found = arr.find(function (v) {
  return v === 8;
});
let foundI = arr.findIndex(function (v) {
  return v === 8;
});
console.log(found, foundI);

function finder(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}
const myFound = finder(arr, function (v) {
  return v === 3;
});
console.log(myFound);
function iFinder(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
}
let myi = iFinder(arr, function (v) {
  return v === 3;
});
console.log(myi);
