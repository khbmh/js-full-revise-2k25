/*
--
--
024. JS Switch Statement
--
https://youtu.be/jjg8wTHAW6k?feature=shared
--
*/
const date = new Date();
const day = date.getDay();

// const day = 0
console.log(day);

if (day === 1) {
  console.log('today is monday');
} else if (day === 2) {
  console.log('tuesday');
} else if (day === 3) {
  console.log('wednesday');
} else if (day === 4) {
  console.log('thursday');
} else if (day === 5) {
  console.log('friday');
} else if (day === 6) {
  console.log('saturday');
} else {
  console.log('sunday');
}


console.log('below from switch');
switch (day) {
  case 6:
    console.log('saturday');
    break;
  case 5:
    console.log('friday');
    break;
  case 4:
    console.log('thursday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 1:
    console.log('Monday');
    break;

  default: console.log('today is sunday');
    break;
}