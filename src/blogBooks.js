const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = require('../src/comments').schema;

const BlogBooksSchema = new Schema({
  title: { type: String },
  summary: { type: String },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

const BlogBooks = mongoose.model('BlogBook', BlogBooksSchema);

module.exports = BlogBooks;
