/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex implementation of a web application that uses various JavaScript features.
*/

// Helper function to generate a random number between min and max
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Class to represent a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Derived class Employee that extends Person
class Employee extends Person {
  constructor(name, age, gender, company) {
    super(name, age, gender);
    this.company = company;
  }

  introduce() {
    console.log(`I am ${this.name}, an employee of ${this.company}.`);
  }
}

// Function to calculate the factorial of a number using recursion
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Function to generate a Fibonacci sequence up to a given number of terms
const generateFibonacci = (terms) => {
  const fibonacci = [0, 1];

  for (let i = 2; i < terms; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
};

// Async function to simulate a delay in executing code
const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Example usage of the code
const julia = new Person("Julia", 25, "Female");
julia.greet();

const john = new Employee("John", 30, "Male", "ABC Corp");
john.greet();
john.introduce();

console.log(factorial(5));
console.log(isPrime(17));
console.log(generateFibonacci(10));

// Async example
const fetchData = async () => {
  await delay(2000);
  console.log("Data fetched!");
};

fetchData().then(() => console.log("Execution complete!"));

// ... More complex and elaborate code continues below