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
            //[exerciseSchema]
             { type: [String] }     
            //  { type: [{
            //     reps: {type: Number,},
            //     sets: {type: Number}
            //  }] }     
    },
);

const routines = model('routines', routineSchema);

module.exports = routines