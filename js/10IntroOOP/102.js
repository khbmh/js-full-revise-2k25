/*
--
--
102. Abstraction
--
https://youtu.be/hUyAXtrOQms?feature=shared
--
*/

// Abstraction is a concept in object-oriented programming where objects are defined by their behavior, not their implementation.

// In simple terms, abstraction allows us to hide the internal details and only show the necessary functionalities to the user.

// An example of abstraction in JavaScript could be a simple calculator class.

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

const calc = new Calculator();

console.log(calc.add(3, 5)); // Output: 8

console.log(calc.subtract(10, 2)); // Output: 8

console.log(calc.multiply(4, 2)); // Output: 8

console.log(calc.divide(10, 2)); // Output: 5