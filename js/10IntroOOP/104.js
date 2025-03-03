/*
--
--
104. Inheritance 
--
https://youtu.be/yXQVpQEmS0g?feature=shared
--
*/

// Inheritance is the process of adopting the behaviors of others within oneself.

// purpose is to avoid code duplication

// Parent class

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
  play() {
    console.log(`${this.name} is playing.`);
  }
  // Overriding the eat method in the child class
  eat() {
    console.log(`${this.name} is chasing mice.`);
  }
}

// Creating instances

const dog = new Dog('Buddy', 'Labrador');
dog.eat(); // Output: Buddy is chasing mice.
dog.bark(); // Output: Buddy is barking.
dog.play(); // Output: Buddy is playing.

// const cat = new Animal('Whiskers');
