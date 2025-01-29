/*
--
--
037. String Literal vs Constructor
--
https://youtu.be/vAg-yMgYkeI?feature=shared
--
*/

let n = 10;
let nStr = '10';
let str = String(n);
let obj = new String(n);
console.log(n, nStr, str, obj);
