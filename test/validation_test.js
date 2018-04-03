const mongoose = require('mongoose');
const assert = require('assert');
const Book = require('../src/books');

describe('Test validation livre', () => {
    it('Un titre doit être requis', (done) => {
        let book = new Book({
            titre: undefined
        });
        const validationResult = book.validateSync();
        const {message} = validationResult.errors.titre;
        assert(message === 'Un titre est requis');
        done();
    });
});