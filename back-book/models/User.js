
const moongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new moongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hash: String,
    salt: String,
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

// Method to set salt and hash password for user
UserSchema.methods.setPassword = function(password) {
    // Creating a unique salt
    this.salt = crypto.randomBytes(16).toString('hex');

    // hashing password and salt 
    this.hash = crypto.pbkdf2Sync(password, this.salt, 100, 64, 'sha512').toString('hex');
}

// Method to validate password
UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 100, 64, 'sha512').toString('hex');
    return this.hash === hash;
}

module.exports = moongoose.model('User', UserSchema);

