const mongoose = require('mongoose');
const assert = require('assert');
const Book = require('../src/books');

describe('Test delete livre', () => {
  let book;

  // On créé notre livre avant toute choses
  beforeEach(done => {
    book = new Book({
      titre: 'Docker'
    });
    book.save().then(() => {
      done();
    });
  });

  function assertDelete(promise, done){
      promise.then(() => {
        // On recherche les livres
        Book.findOne({titre: 'Docker'}).then((book) => {
            // on regarde si l'on nous retourne un résultat null
            assert(book === null);
            // On passe à la suite
            done();
        });
      });
  }

  it("delete à partir de l'instance", (done) => {
    assertDelete(book.remove(), done);
  });

  it("delete du livre à partir de l'id", (done) => {
    assertDelete(Book.remove({titre: 'Docker'}), done);
  });

  it('recherche un livre par son titre et remove (findOneAndRemove)', (done) => {
    assertDelete(Book.findOneAndRemove({titre: 'Docker'}), done);
  });

  it('recherche un livre par son id et remove (findByIdAndRemove)', (done) => {
    assertDelete(Book.findByIdAndRemove(book._id), done);
  }); 

});
