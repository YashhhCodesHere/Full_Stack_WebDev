const fs = require('fs');

// Here, './' depicts means current directory; or,
// Using ./ makes it very clear that you are referring to a relative path starting from the current directory.
fs.copyFile("message.txt", "./CopyDestination/copy.txt", (err) => {
    if(err){
        console.error(err.message);
    }else{
        console.log("Done Copying File!");
    }
});