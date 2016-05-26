'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Cat = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    name: String,
    gender: String,
    birthYear: Number,
    color: String
});

mongoose.model('Cat', Cat);
