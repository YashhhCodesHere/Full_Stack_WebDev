const fs = require('fs');

fs.rm('./copy', {recursive: true}, (err) => {
    if(err){
        console.error(err.message);
    }else{
        console.log("Directory removed!");
    }
})