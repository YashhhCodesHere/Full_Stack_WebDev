const fs = require('fs');

fs.appendFile('message.txt', "\nIn new line...", (err) => {
    if(err){
        console.err(err);
    }else{
        console.log("Done!");
    }
});