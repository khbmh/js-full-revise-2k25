/*
--
--
030. JS While Loop
--
https://youtu.be/rZHeuqMFSLA?feature=shared
--
*/

let i = 90;
while (i < 100) {
  // console.log(i+1, 'hello');
  i++;
}

// let isRunning = true
// while(isRunning){
//   const rand = Math.floor(Math.random() * 10) +1
//   if(rand === 5){
//     console.log('you won');
//     isRunning = false
//   }else{
//     console.log("oh! it's", rand);
//   }
// }

let isRunning = true;
while (isRunning) {
  const rand = Math.floor(Math.random() * 10) + 1;

  if (rand === 5) {
    console.log('you won');
    isRunning = false;
  } else {
    console.log("oh! it's", rand);
  }
}
