/*
--
--
033. JS Break Statement
--
https://youtu.be/g9WR2Bpm5iw?feature=shared
--
*/
while (true) {
  const rand = Math.floor(Math.random() * 10) + 1;

  if (rand === 5) {
    console.log('you won');
    break;
  } else {
    console.log("oh! it's", rand);
  }
}