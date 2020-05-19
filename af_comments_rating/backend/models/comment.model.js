const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: { type: String, required: true },
    content: { type: String, required: true },
    productid: { type: Number, required: true },
    rate: {type: String, required: true},
    date: { type: Date, required: true },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;