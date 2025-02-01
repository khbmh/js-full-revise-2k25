/*
--
--
046. JS Search Value in Array
--
https://youtu.be/FZM0hkkHH8A?feature=shared
--
*/

let arr = [2, 3, 4, 5, 6, 8, 9, 10, 11];

function finder(n, arr) {
  let find = n;
  let isFound = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
      console.log('data found at', i);
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    console.log('data not found.');
  }
}

finder(44, arr);
