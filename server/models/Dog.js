const mongoose = require('mongoose');

let dogModel;

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    breed: {
        type: String,
        requried: true,
        trim: true,
        unique: true,
    },
    age:{
        type: Number,
        required: true,
        min: 0,
    },
    createdDate:{
        type: Date,
        default: Date.now,
    }
});

dogModel = mongoose.model('Dog', dogSchema);

module.exports = dogModel;