// Write a program that prints all the male people’s first name given a complex object

const people = [
    {name: "John", gender: "male"},
    {name: "Jane", gender: "female"},
    {name: "Bob", gender: "male"},
    {name: "Alice", gender: "female"},
    {name: "Charlie", gender: "male"},
    {name: "Diana", gender: "female"}
];

console.log("First name of males are: ");

for(let i = 0; i < people.length; i++){
    if(people[i].gender === "male"){
        console.log(people[i].name);
    }
}