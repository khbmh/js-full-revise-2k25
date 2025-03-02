/*
--
--
090. Function Declaration vs Expression in Javascript
--
https://youtu.be/Y9d8ry5KiA4?feature=shared
--
*/

// Function Declaration

greet();
function greet() {
  console.log('Hello from a function declaration');
}

// Function Expression

// greet2();  // error 
const greet2 = function () {
  console.log('Hello from a function expression');
};

greet2();  
