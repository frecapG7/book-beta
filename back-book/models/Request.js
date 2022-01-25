const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({

    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    description: String,
    created: {
        type: Date,
        default: Date.now
    },
    tags : [String]
});

module.exports = mongoose.model('Request', RequestSchema);