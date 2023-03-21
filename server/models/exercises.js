//This page is unnecessary but I'll leave it for now just in case

const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        muscle: {
            type: String,
            required: true,
        },
        instructions: {
            type: String,
        }
    },
);

const Exercises = model('exercises', exerciseSchema);

module.exports = Exercises