let ctr = 1;
let intervalId; // Store the interval reference

function callback() {
    document.querySelector(".counter").innerHTML = ctr;
    ctr++;
}

function start() {
    if (!intervalId) { // Prevent multiple intervals from being set
        intervalId = setInterval(callback, 1000); // Runs every 1000ms = 1 sec

        // Stop it after 30 seconds
        setTimeout(() => {
            clearInterval(intervalId);
            intervalId = null; // Reset so you can start again if needed
        }, 30000);
    }
}
