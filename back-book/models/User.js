
const moongoose = require('mongoose');

const UserSchema = new moongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "DEFAULT"
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = moongoose.model('User', UserSchema);

