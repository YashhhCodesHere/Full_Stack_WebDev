const fs = require("fs");


function readFile(){
    console.log("Inside readFile");
    return new Promise(function(resolve, reject){
        console.log("Inside Promise");
        fs.readFile("file.txt", "utf-8", function(err, data){
            if (err) {
                console.error("Error reading file:", err);
                reject(err);
            } else {
                console.log("Inside Resolve");
                resolve(data);
            }
        });
    });
}

function onDone(data){
    if(data !== null){
        console.log(data);
    }
}

readFile().then(onDone);