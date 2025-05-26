let d = new Date;

console.log(typeof(d));

// let p = new Promise();  // Throws an error -> Due to wrong syntax

let p = new Promise(function(resolve, reject){})

console.log(typeof(p));