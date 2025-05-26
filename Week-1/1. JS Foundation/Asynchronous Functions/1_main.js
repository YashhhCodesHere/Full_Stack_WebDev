const fs = require("fs"); // fs is a built-in module in Node.js

fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});

console.log("Hello There 1");

let a = 0;

for(let i = 0; i < 10000000; i++){
    a++;
}

console.log("Hello There 2");