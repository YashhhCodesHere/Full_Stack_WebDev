const express = require('express');
const app = express();  // Creating the app instance
const port = 3000;  // Setting the Port

app.set("view engine", "ejs");

// Middleware:-
app.use((req, res, next) => {
    console.log(`Getting request inside from the middleware!\nFurther rerouting to next route...\n`);
    next();
})

// Default Routing:- (GET Method)
app.get('/', (req, res) => {
    res.render('main');
})

app.get('/profile/', (req, res) => {
    res.send("Hello from profile page");
})

// Error:-
app.get('/error/', (req, res) => {
    res.status(404).json({
        message : "Page Not Found!"
    });
})

// Dynamic Routing:-
app.get('/user/:id', (req, res) => {
    res.send(`Dynamic Routing:Hello from user: ${req.params.id}`);
})

// Starting the server:- 
app.listen(port, () => {
    console.log(`Port is listening on port no: ${port}:-\n`);
})