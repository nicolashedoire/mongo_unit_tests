const mongoose = require('mongoose');
const assert = require('assert');
const Book = require('../src/books');

describe('Test update livre', () => {
  let book;
  const newTitle = 'Nodejs';

  // On créé notre livre avant toute choses
  beforeEach(done => {
    book = new Book({
      titre: 'Docker'
    });
    book.save().then(() => {
      done();
    });
  });

  function assertTitle(promise, done){
      promise.then(() => {
        // On recherche les livres
        Book.find().then((books) => {
            // on compare le titre avec le nouveau
            assert(books[0].titre === newTitle);
            // On passe à la suite
            done();
        });
      });
  }

  it("update le titre à partir de l'instance", done => {
    book.set('titre', newTitle);
    assertTitle(book.save(), done);
  });

  it('update le titre du livre', done => {
    assertTitle(Book.update({titre: 'Docker'}, {titre: newTitle}), done);
  });

  it('recherche un livre par son titre et update (findOneAndUpdate)', done => {
    assertTitle(Book.findOneAndUpdate({titre: 'Docker'}, {titre: newTitle}), done);
  });

  it('recherche un livre par son id et update (findOneAndUpdate)', done => {
    assertTitle(Book.findByIdAndUpdate( book._id, {titre: newTitle}), done);
  });  

});
