/*
--
--
105. Polymorphism
--
https://youtu.be/_DN8vvLYQO8?feature=shared
--
*/

/*
The ability of different objects to respond to the same method call in their own way. It allows one interface to be used for a general class of actions, making the system more flexible and extensible.
*/

class Animal {
  speak() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('The dog barks.');
  }
}

class Cat extends Animal {
  speak() {
    console.log('The cat meows.');
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.speak(); // Output: The animal makes a sound.
dog.speak(); // Output: The dog barks.
cat.speak(); // Output: The cat meows.
