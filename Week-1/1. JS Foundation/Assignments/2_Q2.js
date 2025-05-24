// Calculate the time it takes between a setTimeout call and the inner function actually running:-

const expectedDelay = 1000;
const start = Date.now();

setTimeout(() => {
    const end = Date.now();
    const actualDelay = end - start;

    console.log(`Expected Delay: ${expectedDelay}ms`);
    console.log(`Actual Delay: ${actualDelay}ms`);
    console.log(`TIME TAKEN (Difference/Drift): ${actualDelay - expectedDelay}ms`);
}, expectedDelay);