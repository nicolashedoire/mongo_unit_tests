const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/users');
const Comment = require('../src/comments');
const BlogBook = require('../src/blogBooks');

describe('Test de références', () => {

    let user, comment, blogBook;

    beforeEach((done) => {

        user = new User({
            name: 'John'
        });

        comment = new Comment({
            content: 'Je suis un commentaire'
        });

        blogBook = new BlogBook({
            title: 'Titre du blogBook',
            summary: 'Summary du blogBook'
        });

        user.blogBooks.push(blogBook);
        blogBook.comments.push(comment);
        comment.user = user;

        Promise.all([user.save(), blogBook.save(), comment.save()]).then(() => {
            done();
        });
    });

    it("Test le litre du livre d'un user", (done) => {
        User.findOne({name: 'John'}).populate('blogBooks').then((user) => {
            assert(user.blogBooks[0].title === 'Titre du blogBook');
            done();
        });
    });
});