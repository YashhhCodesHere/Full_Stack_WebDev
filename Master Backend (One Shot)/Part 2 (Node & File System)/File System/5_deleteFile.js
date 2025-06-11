const fs = require('fs');

fs.unlink('./messagecopy.txt', (err) => {
    if(err){
        console.error(err.message);
    }else{
        console.log("File removed!");
    }
})