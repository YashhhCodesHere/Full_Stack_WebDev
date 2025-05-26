import fs from "fs";

// Using Callback Function:-

function readFile(callback){
    fs.readFile("file.txt", "utf-8", function(err, data){
        if (err) {
            console.error("Error reading file:", err);
            callback(null);
        } else {
            callback(data);
        }
    });
}

function onDone(data){
    if (data !== null) {
        console.log(data);
    }
}

// Use the readFile wrapper function
readFile(onDone);