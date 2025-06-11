const express = require("express");

const app = express();  // Initialising app instance:-

// Initialising Middleware:-
app.use((req, res, next) => {
    console.log("Inside the Middleware!");
    next();
})

// Initialising Routes:-
app.get('/', (req, res) => {
    res.send("You're at Main Page!");
});

app.get('/profile/', (req, res) => {
    res.send("You're at profile page!");
});

app.get('/admin/', (req, res) => {
    throw new Error("Oops! Something went wrong...");   // Throwing error
});

// Error Handler Middlewares:- (Must be written after all routes)
app.use((err, req, res, next) => {
    console.log(err.stack);     // Showing error on Backend
    res.status(500).send("Internal Server Error!");     // On frontend
})

// 
app.listen(3000);