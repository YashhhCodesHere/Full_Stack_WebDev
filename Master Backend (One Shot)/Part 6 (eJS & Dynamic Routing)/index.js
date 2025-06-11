const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Parsing:- (Handling data from 'FORM')
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Setting eJS as view engine:-
app.set('view engine', 'ejs');
// Setting views folder:-
app.set('views', path.join(__dirname, 'views'));


// Serving static files(like css, js, images) located in 'public' folder:-
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.get('/', (req, res) => {
    res.render('main');
});

app.get('/profile/:username', (req, res) => {
    const userId = req.params.username;
    res.render('profile', {userId});
});

app.get('/profile/:id/:age', (req, res) => {
    const userId = req.params.id;
    const userAge = req.params.age;
    res.render('profile', {userId, userAge});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
