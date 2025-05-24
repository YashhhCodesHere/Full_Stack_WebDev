function greet(){
    console.log("Good Morning!\n");
}

// setTimeout is used to call a function after a particular time/certain duration.
setTimeout(greet, 5000);    // syntax: setTimeout(function-to-call, time)
// It's also a callback, as we passed a function as an argument


// setInterval is used to call a function repeatedly at a particular interval.
let id = setInterval(greet, 1000);   // syntax: setInterval(function-to-call, time)

setTimeout(() => {
    clearInterval(id);
    console.log("Stopped!");
}, 5*1000);