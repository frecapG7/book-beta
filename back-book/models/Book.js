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



    // Meta data info
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    created: {
        type: Date,
        default : Date.now
    },
    modified: {
        type: Date
    }

});


module.exports = mongoose.model('Book', BookSchema);

