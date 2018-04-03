const mongoose = require('mongoose');
const assert = require('assert');
const Book = require('../src/books');

describe('Test creation livre', () => {
    it('sauvegarder un livre', (done) => {
        let book = new Book({
            titre: 'Docker'
        });
        
        book.save().then(()=> {
            assert(!book.isNew);
            done();
        })
    });
});