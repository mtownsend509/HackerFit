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

const exercises = model('exercises', exerciseSchema);

module.exports = exercises