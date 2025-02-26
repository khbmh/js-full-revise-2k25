/*
--
--
078. Sort, Some and Every Function in Javascript
--
https://www.youtube.com/watch?v=IHjLft2UU_g&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=79
--
*/
let arr = [2, 5, 1, -2, -7, 9, 3];

let persons = [
  {
    name: 'a',
    age: 21,
  },
  {
    name: 'b',
    age: 26,
  },
  {
    name: 'c',
    age: 31,
  },
  {
    name: 'd',
    age: 11,
  },
];

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr);

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons);

const res1 = arr.every(function (v) {
  return v < 0;
});
console.log(res1);
const res2 = arr.some(function (v) {
  return v < 0;
});
console.log(res2);
