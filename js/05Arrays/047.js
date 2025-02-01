/*
--
--
047. Multidimensional Array
--
https://youtu.be/Ei7kbCe8YEw?feature=shared
--
*/
// n dimension will require n for loops

let arr = [
  [89, 78, 98, 84],
  [49, 77, 57, 64],
  [80, 92, 79, 88],
];

for(let i = 0; i<arr.length; i++){
  // console.log(arr[i]);
  for(let j = 0; j<arr[i].length; j++){
    console.log('data from', i,'-', j, ':', arr[i][j]);
  }
}
