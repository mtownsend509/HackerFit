const { Users, Routines, Exercises } = require('../models');
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");


const resolvers = {
    Query: {
        user: async (parent, {username}) => {
            return Users.findOne({username: username}).populate("savedRoutines")
        },
        exercises: async (parent, {muscle}) => {
            return Exercises.findOne({muscle: muscle})
        },
        routines: async(parent, {
          username }) => {
            const params = username ? { username } : {};
            return Routines.find(params);
        },
        routine: async(parent, { routineId }) => {
            return Routines.findOne({_id: routineId})
        }
    },


    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await Users.findOne({ username });
      
            if (!user) {
              throw new AuthenticationError("No profile with this username found!", {
                extensions: {
                  code: "UNAUTHENTICATED",
                },
              });
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError("Incorrect password");
            }
      
      
            const token = signToken(user);
      
            return { token, user };
          },
        addUser: async (parent, { username, email, password }) => {
            const user = await Users.create({username, email, password});
            const token= signToken(user);
            return { token, user};
        },
        createRoutine: async (parent, { Title, muscleGroups, exercises }
          // , context
          )  => {
            // if (context.user) {
                const routine = await Routines.create( { Title, muscleGroups, exercises });
            // await Users.findOneAndUpdate(
            //     { _id: context.user._id},
            //     { $addToSet: { savedRoutines: routine._id}}
            // );
            return routine
            },
            // throw new AuthenticationError("You need to be logged in!");
        // },
        addExercise: async (parent, { routineId, name, muscle, instructions }, 
          // context
          ) => {
            // if (context.user) {
              return Routines.findOneAndUpdate(
                { _id: routineId },
                {
                  $addToSet: {
                    exercises: { name, muscle, instructions },
                  },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            },
          //   throw new AuthenticationError("You need to be logged in!");
          // },
        // updateExercise: async (parent, { exerciseId,reps_sets}, context) => {
        //     if (context.user) {
        //         return Exercises.findOneAndUpdate(
        //             {_id: exerciseId},
        //             {
        //                 $addtoSet: {
        //                     reps_sets: reps_sets
        //                 },
        //             },
        //             {
        //                 new: true,
        //                 runValidators: true,
        //             }
        //         );
        //     }
        //     throw new AuthenticationError("You need to be logged in!");
        // },
       deleteRoutine: async (parent, { routineId }, context) => {
            if (context.user) {
              const routine = await Routines.findOneAndDelete({
                _id: routineId
              });
      
              await Users.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedRoutines: routine._id } }
              );
      
              return routine;
            }
            throw new AuthenticationError("You need to be logged in!");
          },
        deleteExercise: async (parent, { exerciseId, routineId }, context) => {
            if (context.user) {
              return Routines.findOneAndUpdate(
                { _id: routineId },
                {
                  $pull: {
                    exercises: {
                      _id: exerciseId
                    },
                  },
                },
                { new: true }
              );
            }
            throw new AuthenticationError("You need to be logged in!");
          },

        
        // updateRoutine: async (parent, { _id,Title, muscle, exercises }) => {
        //     const newRoutine = await Routines.findOneAndUpdate(
        //         { _id },
        //         {Title: Title},
        //         {muscle: muscle},
        //         {exercises: exercises},
        //         { new: true }
        //     );
        //     return newRoutine;
        // },
        // createUser: async (parent, {username, password}) => {
        //     const newUser = await Users.create(
        //         {username: username},
        //         {password: password}
        //     );
        //     return newUser;
        // }
    }
};

module.exports = resolvers;