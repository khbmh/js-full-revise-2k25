/*
--
--
020. JS Logic & Conditions
--
https://youtu.be/LOQCrz_OGX8?feature=shared
--
*/

// Example of an if statement
let temperature = 25; // Current temperature in degrees Celsius
if (temperature > 20) {
  console.log("It's a warm day."); // This block runs if the condition is true
}

// Example of an if-else statement
let age = 16; // Age of a person
if (age >= 18) {
  console.log('You are an adult.'); // This block runs if the condition is true
} else {
  console.log('You are not an adult.'); // This block runs if the condition is false
}

// Example of an if-else if-else statement
let score = 85; // Score of a student
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B'); // This block runs if the first condition is false but this one is true
} else if (score >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: D');
}

// Example of using the switch statement
let day = 'Monday'; // Current day
switch (day) {
  case 'Monday':
    console.log('Start of the week.');
    break; // Exit the switch after this case
  case 'Friday':
    console.log('End of the week.');
    break;
  default:
    console.log('Midweek days.');
}

// Example of the ternary operator (conditional operator)
let isRaining = false;
let weatherMessage = isRaining ? 'Take an umbrella.' : 'Enjoy your day!';
console.log(weatherMessage); // Outputs: Enjoy your day!
