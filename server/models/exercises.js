const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        muscleGroup: {
            type: String,
            required: true,
        },
        difficulty: {
            type: Number,
        }
    },
);

const exercises = model('exercises', exerciseSchema);

module.exports = exercises