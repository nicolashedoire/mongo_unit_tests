const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = require('../src/books').schema;

const UserSchema = new Schema({
    name: {type: String},
    books: [BookSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;