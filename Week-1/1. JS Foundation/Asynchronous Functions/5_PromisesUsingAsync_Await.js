function asyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Main Resolved after 3 seconds");
        }, 3000);
        
    });

    return p;
}

async function main(){
    console.log("Inside Main");
    const result = await asyncFunction();
    console.log(result);
}

console.log("Before Main")

main();

console.log("After Main");
