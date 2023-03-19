const { Schema, model } = require('mongoose');
const exerciseSchema = require('./exercises');


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
            // [
            //     {
            //       type: Schema.Types.ObjectId,
            //       ref: "exercises",
            //     },
            //   ],

             { type: [{
                reps: {
                type: Number,
            },
                sets: {
                type: Number
            },
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
                    required: true,
                }
             }] }     
    },
);

const routines = model('routines', routineSchema);

module.exports = routines