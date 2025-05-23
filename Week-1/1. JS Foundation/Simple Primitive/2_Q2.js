// Write a program that greets a person based on their gender. (If else)

function greet(gender){
    if(gender === "male"){
        console.log("Good Morning Sir!");
    }else if(gender === "female"){
        console.log(`Good Morning Mam!`);
    }else{
        console.error("Invalid Input!");
    }
}

const prompt = require("prompt-sync")();
let gender = prompt("Enter your gender in lower case: ");
greet(gender);