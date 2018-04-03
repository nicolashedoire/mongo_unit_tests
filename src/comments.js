const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('../src/users').schema;

const CommentSchema = new Schema({
  comment: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
