const mongoose = require('mongoose');
const assert = require('assert');
const Book = require('../src/books');
const User = require('../src/users');

describe('Test relation user | book', () => {
    it('test de la taille de la liste de livres pour un user', (done) => {
        const user = new User({
            name: 'John',
            books: [
                {titre: 'Docker'},
                {titre: 'Nodejs'}
            ]
        });

        user.save().then(() => {
            User.findOne({name: 'John'}).then((usr) => {
                assert(usr.books.length === 2);
                done();
            });
        });
    });
});