// Exercise 2: Build a Constructor Function

// Step 1: Define the Animal constructor
function Animal(species, name, sound) {
  this.species = species;
  this.name = name;
  this.sound = sound;
  this.makeSound = function () {
    console.log(`${this.name} says "${this.sound}"`);
  };
}

// Step 2: Create two animal instances
const animal1 = new Animal("Dog", "Buddy", "Woof!");
const animal2 = new Animal("Cat", "Whiskers", "Meow!");

// Step 3: Call their makeSound() methods
animal1.makeSound(); // Output: Buddy says "Woof!"
animal2.makeSound(); // Output: Whiskers says "Meow!"
