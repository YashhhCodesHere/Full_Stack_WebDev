const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    fs.readdir('./files', (err, files) => {
        res.render('index', {files : files});
    })
});

app.get("/file/:filename", (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, data) => {
        res.render('show', {filename: req.params.filename, filedata: data});
    })
})

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(" ").join("-")}.txt`, req.body.details, (err) => {
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    })
})

app.get("/edit/:filename", (req, res) => {
    res.render('edit', {filename: req.params.filename});
})

app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous.split(" ").join("-")}`, `./files/${req.body.new.split(" ").join("-")}.txt`, (err) => {
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});