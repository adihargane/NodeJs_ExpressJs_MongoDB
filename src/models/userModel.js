const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    dob: {
        type: Number,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

const UserModel = mongoose.model('User', userSchema, 'usersmaster');

module.exports = UserModel;