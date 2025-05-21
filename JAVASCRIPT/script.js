let x = "Robinn";
console.log(x);
console.log("Type of x is: ", typeof(x));

let a = "1", b = "1";
console.log(a - b);

// Objects:-
let course = {
    name: "JavaScript",
    source: "Youtube",
    price: 999,
    rating: 4.99
};

console.log(`Price of the course is: Rs.${course.price}`);

const prompt = require("prompt-sync")();
let name = prompt("Enter your name: ");
console.log(`Your name is: ${name}`);