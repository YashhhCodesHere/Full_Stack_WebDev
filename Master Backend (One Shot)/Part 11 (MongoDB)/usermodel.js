// Importing Dependencies:-
const mongoose = require('mongoose');
// Connecting to Database:-
mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');

// Creating a Schema:-
const userSchema = new mongoose.Schema({
    name: String,   // Fields
    email: String,
    password: String
});

// Creating a Model:-
const User = mongoose.model('User', userSchema);

// Exporting the Model:-
module.exports = User;

