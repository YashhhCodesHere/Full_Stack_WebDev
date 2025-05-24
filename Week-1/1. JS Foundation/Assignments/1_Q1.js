// Create a counter in Javascript (counts down from 30 to 0) using setInterval:-

// Way-1:-
// let count = 30;

// let id = setInterval(() => {
//     console.log(count);
//     count--;
// }, 1000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log(`Timer Completed!`);
// }, 30 * 1000);

// Way-2:-
let count = 30;

let id = setInterval(() => {
    console.log(count);
    count--;

    if(count === 0){
        clearInterval(id);
    }
}, 100)