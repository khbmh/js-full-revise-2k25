/*
--
--
075. Filter Function in Javascript
--
https://youtu.be/w_FI5rfsehs?feature=shared
--
*/
const arr = [1, 2, 3, 4];

// let filterArr = arr.filter(function (val) {
//   return val > 2;
// });

// console.log(filterArr);

function filtering(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filtering(arr, function (val) {
    return val > 2;
  }),
);
// filtering(arr);
