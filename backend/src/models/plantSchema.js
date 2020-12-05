const mongoose = require('mongoose');
const Schema = mongoose.Schema

const plantSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    sciName: {
        type: String,
        required: true
    },
    comName: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: false
    },
    owner: {
        type: Array,
        required: true
    }
}, { timestamps: true } );

const plantsCollection = mongoose.model('plant', plantSchema);

module.exports = plantsCollection