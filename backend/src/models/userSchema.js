const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contacts: {
        type: String,
        required: true,
    },
    plants:{
        type: Array,
        required: false
    },
    area: {
        type: String,
        required: false
    },
    followers: {
        type: Array,
        required: false
    },
    following: {
        type: Array,
        required: false
    }

}, { timestamps: true });

const usersCollection = mongoose.model('user', userSchema)

module.exports = usersCollection;