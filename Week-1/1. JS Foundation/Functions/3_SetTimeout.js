function greet(){
    console.log("Good Morning!\n");
}

// setTimeout is used to call a function after a particular time/certain duration.
setTimeout(greet, 5000);    // syntax: setTimeout(function-to-call, time)
// It's also a callback, as we passed a function as an argument