const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = require('../src/books').schema;
const BlogBookSchema = require('../src/blogBooks').schema;

const UserSchema = new Schema({
    name: {type: String},
    books: [BookSchema],
    blogBooks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'BlogBook'
        }
    ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;