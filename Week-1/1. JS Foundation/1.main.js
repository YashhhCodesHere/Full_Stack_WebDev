// Write the program to greet a person given on their first and last name:-

function greet(firstName, lastName){
    console.log(`Hello!\nGood Morning ${firstName} ${lastName}`);
}

const prompt = require("prompt-sync")();
let firstname = prompt("Enter your first name: ");
let lastname = prompt("Enter you last name: ");

greet(firstname, lastname);

