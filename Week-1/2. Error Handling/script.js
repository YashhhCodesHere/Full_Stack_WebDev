// const prompt = require("prompt-sync")();


// let a = prompt("Enter a number: ");
// let b = prompt("Enter another number: ");

// let sum = parseInt(a) + parseInt(b);
// console.log(sum);

// function getAge(age) {
//   if (age < 0) {
//     throw new Error("Age cannot be negative"); 
//   }
//   return age;
// }

// try {
//   let age = getAge(-5);
//   console.log(age);
// } catch (error) {
//     console.log(error.message);
//     console.log(error.stack);
// }


function riskyFunction() {
  console.log("2. Inside riskyFunction");
  throw new Error("4. Something went wrong!"); // 👈 Error is created here
  console.log("This will not run");
}

try {
  console.log("1. Before calling riskyFunction");
  riskyFunction(); // 👈 Control goes inside this
  console.log("-1. This will not run if error thrown");
} catch (err) {
  console.log("3. Caught an error:", err.message); // 👈 Control comes here after error
} finally {
  console.log("5. Finally block always runs"); // 👈 This runs no matter what
}

console.log("6. Program continues...");
