const { Schema, model, Types } = require('mongoose');



const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            unique: true,
            required: true,
            match: [
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,32}$/,
                `password must be between 4 and 32 characters and include at least one uppercase letter and one numeric digit`
            ]
        },
        // routines: [
        //     type: Schema.Types.ObjectId,
        //     ref: 'routines'
        // ],
        // friends: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'users'
        // }]
    },
);


const users = model('users', userSchema);

module.exports = users