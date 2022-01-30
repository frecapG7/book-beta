const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    author: String,
    publishDate: Date,
    tags: [String],

    originCountry: String,
    

});


module.exports = mongoose.model('Book', BookSchema);

