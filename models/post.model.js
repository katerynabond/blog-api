const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  body: {
    required: true,
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    required: true,
    type: Schema.ObjectId
  }
});


const Post = mongoose.model('Post', postSchema);
module.exports = Post;
