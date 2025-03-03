/*
--
--
103. Encapsulation |
--
https://youtu.be/_TyKjex0z0A?feature=shared
--
*/

/*

The concept of bundling data (variables) and methods (functions) that operate on the data into a single unit (class). It also restricts direct access to some of the object's components, typically by using access modifiers like private or protected, which helps protect the integrity of the data

*/
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Age must be a positive number');
    }
    this._age = value;
  }
}

const person = new Person('John Doe', 25);

console.log(person.name); // Output: John Doe

person.name = 'Jane Doe';

console.log(person.name); // Output: Jane Doe
