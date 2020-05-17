const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    username: { type: String, required: true },
    rating: { type: String, required: true },
    productid: { type: Number, required: true },  
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;