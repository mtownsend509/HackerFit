const { Schema, model } = require('mongoose');

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
        // exercises: [
        //     type: Schema.Types.ObjectId,
        //     ref: 'exercises'
        // ],
    },
);

const routines = model('routines', routineSchema);

module.exports = routines