// Exercise 1: Create a Simple Object

// Step 1: Define the book object with required properties and method
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 324,
  read: function () {
    console.log(`Currently reading "${this.title}" by ${this.author}.`);
  }
};

// Step 2: Call the read method to test output
book.read();

