const mongoose = require('mongoose');
const assert = require('assert');
const Book = require('../src/books');

describe('Test read livre', () => {
  let book;
  beforeEach(done => {
    book = new Book({
      titre: 'Docker'
    });
    book.save().then(() => {
      done();
    });
  });

  it('recherche un livre', done => {
    Book.find({ titre: 'Docker' }).then(books => {
      assert(books[0]._id.equals(book._id));
      done();
    });
  });

  it('recherche un livre par id', done => {
    Book.findOne({ _id: book._id }).then(res => {
      assert(res._id.equals(book._id));
      done();
    });
  });
});
