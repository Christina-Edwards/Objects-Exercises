// Exercise 3: Expand the Blueprint

// Step 1: Define the Student constructor
function Student(name, grade, subject) {
  this.name = name;
  this.grade = grade;
  this.subject = subject;

  // Method to introduce the student
  this.introduce = function () {
    console.log(`Hi, I am ${this.name}, studying ${this.subject} in grade ${this.grade}.`);
  };

  // Method to simulate finishing the school year
  this.finishesSchoolYear = function () {
    if (this.grade < 12) {
      this.grade += 1;
      console.log(`Hi, I am ${this.name}, studying ${this.subject} in grade ${this.grade}.`);
    } else {
      console.log(`Congratulations, ${this.name} has graduated!`);
    }
  };
}

// Step 2: Create three student instances
const student1 = new Student("Alice", 10, "Mathematics");
const student2 = new Student("Brian", 11, "History");
const student3 = new Student("Chloe", 12, "Biology");

// Step 3: Introduce each student and simulate finishing the school year
student1.introduce();
student1.finishesSchoolYear();

student2.introduce();
student2.finishesSchoolYear();

student3.introduce();
student3.finishesSchoolYear();
