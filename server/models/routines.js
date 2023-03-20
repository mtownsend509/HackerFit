const { Schema, model } = require('mongoose');
// const exerciseSchema = require('./exercises');


const routineSchema = new Schema(
    {
        Title: {
            type: String,
            unique: true,
            required: true,
        },
        muscleGroups: {
            type: String,
            required: true,
        },
        exercises: 
             [ {
                sets: {
                type: Number,
                },
                reps: {
                    type: Number,
                },
                name: {
                    type: String,
                    required: true,
                },
                muscle: {
                    type: String,
                },
                instructions: {
                    type: String,
                }
             }]  
    },
);

const routines = model('routines', routineSchema);

module.exports = routines