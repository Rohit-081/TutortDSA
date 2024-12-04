// SOLID is a mnemonic acronym that stands for the five design principles of Object-Oriented class design. These principles are:

// S - Single-responsibility Principle
// O - Open-closed Principle
// L - Liskov Substitution Principle
// I - Interface Segregation Principle
// D - Dependency Inversion Principle

// What is the Single-Responsibility Principle (SRP)?
// The Single-responsibility Principle, or SRP, states that a class should only have one reason to change. This means that a class should have only one job and do one thing.

class ValidatePerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ValidateName(name) {
    if (name.length > 3) {
      return true;
    } else {
      return false;
    }
  }

  ValidateAge(age) {
    if (age > 18) {
      return true;
    } else {
      return false;
    }
  }

  Display() {
    if (this.ValidateName(this.name) && this.ValidateAge(this.age)) {
      console.log(`Name: ${this.name} and Age: ${this.age}`);
    } else {
      console.log("Invalid");
    }
  }
}

class ValidatePerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ValidateName(name) {
    if (name.length > 3) {
      return true;
    } else {
      return false;
    }
  }

  ValidateAge(age) {
    if (age > 18) {
      return true;
    } else {
      return false;
    }
  }
}

class DisplayPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.validate = new ValidatePerson(this.name, this.age);
  }

  Display() {
    if (
      this.validate.ValidateName(this.name) &&
      this.validate.ValidateAge(this.age)
    ) {
      console.log(`Name: ${this.name} and Age: ${this.age}`);
    } else {
      console.log("Invalid");
    }
  }
}
