/*
--
--
048. JS Reverse An Array
--
https://youtu.be/LvnU_5oqVsU?feature=shared
--
*/
let arr = [1, 2, 3, 4, 5];
let arrReverse = [];
for (let i = 0; i < arr.length; i++) {
  arrReverse.unshift(arr[i]);
}
console.log(arr);
console.log(arrReverse);

for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
console.log(arr);
