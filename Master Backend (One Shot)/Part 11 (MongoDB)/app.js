const express = require('express');
const app = express();
const port = 3000;

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Create a user using Mongoose:-
app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Robinn",
        email: "WhoKnowsRobin@gmail.com",
        password: "password"
    });
    res.send(createdUser);
})

// Read all users using Mongoose:-
app.get('/read', async (req, res) => {
    let allUsers = await userModel.find();
    res.send(allUsers);
})

// Read a single user using Mongoose:-
app.get('/read/:id', async (req, res) => {
    let singleUser = await userModel.findById(req.params.id);
    res.send(singleUser);
})

// Update a user using Mongoose:-
app.get('/update/:id/:name', async (req, res) => {
    let updatedUser = await userModel.findByIdAndUpdate(req.params.id, {
        name: req.params.name
    });
    res.send(updatedUser);
})

// Delete a user using Mongoose:-
app.get('/delete/:id', async (req, res) => {
    let deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.send(deletedUser);
})

// Deleting a user with name using Mongoose:-
app.get('/delete/:name', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({
        name: req.params.name
    });
    res.send(deletedUser);
})

// Delete all users using Mongoose:-
app.get('/delete', async (req, res) => {
    let deletedUsers = await userModel.deleteMany();
    res.send(deletedUsers);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


