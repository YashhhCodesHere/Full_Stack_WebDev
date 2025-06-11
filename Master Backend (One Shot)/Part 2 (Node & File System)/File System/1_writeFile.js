const fs = require('fs');

fs.writeFile('message.txt', "Hello Yash!", (err) => {
    if(err){
        console.err(err);
    }else{
        console.log("Done!");
    }
});