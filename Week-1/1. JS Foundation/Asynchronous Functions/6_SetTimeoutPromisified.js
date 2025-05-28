function setTimeoutPromisified(duration){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, duration);
    });
}

function callback(){
    console.log("1 Second is now passed!");
}

setTimeoutPromisified(1000).then(callback);