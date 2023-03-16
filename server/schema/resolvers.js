const { Users, Routines, Exercises } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, {username}) => {
            return Users.findOne({username: username})
        },
        routines: async() => {
            return Routines.find({})
        },
    },
    Mutations: {
        createRoutine: async (parent, { Title, muscle, exercises }) => {
            const routine = await routine.create( Title, muscle, exercises );
            return routine
        },
        updateRoutine: async (parent, { _id,Title, muscle, exercises }) => {
            const newRoutine = await Routines.findOneAndUpdate(
                { _id },
                {Title: Title},
                {muscle: muscle},
                {exercises: exercises},
                { new: true }
            );
            return newRoutine;
        },
        createUser: async (parent, {username, password}) => {
            const newUser = await Users.create(
                {username: username},
                {password: password}
            );
            return newUser;
        }
    }
};

module.exports = resolvers;