/*
--
--
032. JS Nested Loops
--
https://youtu.be/XpasFJJ4geE?feature=shared
--
*/

function make(qq) {
  let n = qq;

  for (let i = 1; i <= n; i++) {
    let result = '';
    for (let j = 1; j <= i; j++) {
      result += '*' + ' ';
    }
    console.log(result);
  }

  // console.log('hello');

  let t = qq;
  for (let h = 1; h < t; h++) {
    result = '';
    for (let w = 1; w <= t; w++) {
      result += '* ';
    }
    console.log(result);
  }
}

// make(4);

