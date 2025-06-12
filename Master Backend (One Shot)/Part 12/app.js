const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/read', (req, res) => {
    res.render('read');
});

app.post('/create', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});