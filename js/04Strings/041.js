/*
--
--
041. JS String Length
--
https://youtu.be/WDkWetCCtnI?feature=shared
--
*/

const str = 'Pineapple is not a string';

let length = 0;

while (true) {
  if (str.charAt(length) !== '') {
    length++;
  }
}
console.log(length);
console.log(str.length);
// console.log(str.charAt(20));
