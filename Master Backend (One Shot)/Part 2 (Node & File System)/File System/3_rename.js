const fs = require('fs');

fs.rename('message.txt', 'hello.txt', (err) => {
    if(err){
        console.err(err);
    }else{
        console.log("Done!");
    }
});