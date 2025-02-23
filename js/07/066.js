/*
--
--
https://youtu.be/y2cT2E2u_Mg?feature=shared
--
066. Function Scoping in Javascript
--
*/

function outer (){
  let outerVar = 10;
  function inner (){
    let innerVar = 5;
    console.log(innerVar); // 5
    console.log(outerVar); // 10 // can access outer variable
  }
  console.log(outerVar);
  // console.log(innerVar); // error // can't access inner variable
  inner();
}

outer();