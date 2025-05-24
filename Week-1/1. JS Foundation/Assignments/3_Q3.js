// Create a terminal clock (HH:MM:SS):-

// terminalClock.js

function formatTime(unit) {
    return unit.toString().padStart(2, '0');
}

function displayClock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    const timeString = `${hours}:${minutes}:${seconds}`;

    // Clear the line and write the time in place
    process.stdout.write(`\r${timeString}`);
}

// Update every second
setInterval(displayClock, 1000);