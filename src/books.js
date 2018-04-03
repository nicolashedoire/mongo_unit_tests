const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    titre: {type: String, required:[true, 'Un titre est requis']},
    pagesCount: {type: Number, default: 0}
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;