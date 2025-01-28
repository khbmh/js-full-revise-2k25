/*
--
--
035. JS Infinity for Loop
--
https://youtu.be/vd8af77j2gk?feature=shared
--
*/
for (;;) {
  const rand = Math.floor(Math.random() * 10) + 1;

  if (rand === 5) {
    console.log('you won');
    break;
  } else {
    console.log("oh! it's", rand);
  }
}
