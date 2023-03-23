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
        },
        me: async (parent, args, context) => {
          console.log("contextuser", context.user)
          if (context.user) {
            return Users.findOne({ _id: context.user._id }).populate("savedRoutines");;
          }
          throw new AuthenticationError('You need to be logged in!');
        },
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
            const user = await Users.create( {username, email, password});
            const token= signToken(user);
            return { token, user};
        },
        createRoutine: async (parent, { Title }
          , context
          )  => {

            if (context.user) {

                const routine = await Routines.create( { Title });
                const updatedUser = await Users.findOneAndUpdate(
                { _id: context.user._id},
                { $addToSet: { savedRoutines: routine._id}}
            );
            return routine,
            updatedUser
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addExercise: async (parent, { title, name, muscle, instructions }, 
          // context
          ) => {
            // if (context.user) {
              return Routines.findOneAndUpdate(
                { Title: title },
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
        updateExercise: async (parent, { routineId, exerciseId, reps, sets, name, muscle, instructions}
          // , context
          ) => {
            // if (context.user) {
                return Routines.findOneAndUpdate(
                    {'exercises._id' : exerciseId},
                    {
                        $set: {
                          'exercises.$.reps': reps,
                          'exercises.$.sets': sets,
                          'exercises.$.name': name,
                          'exercises.$.muscle': muscle,
                          'exercises.$.instructions': instructions
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            // }
            // throw new AuthenticationError("You need to be logged in!");
        },
       deleteRoutine: async (parent, { routineId }
        // , context
        ) => {
            // if (context.user) {
              const routine = await Routines.findOneAndDelete({
                _id: routineId
              });
      
              // await Users.findOneAndUpdate(
              //   { _id: context.user._id },
              //   { $pull: { savedRoutines: routine._id } }
              // );
      
              return routine;
            },
          //   throw new AuthenticationError("You need to be logged in!");
          // },
        deleteExercise: async (parent, { exerciseName, routineName }
          // , context
          ) => {
            // if (context.user) {
              return Routines.findOneAndUpdate(
                { Title: routineName },
                {
                  $pull: {
                    exercises: {
                      name: exerciseName
                    },
                  },
                },
                { new: true }
              );
            },
          //   throw new AuthenticationError("You need to be logged in!");
          // },

        
        updateRoutine: async (parent, { routineId ,Title, muscleGroups,}) => {
            const updatedRoutine = await Routines.findOneAndUpdate(
                { _id: routineId },
                {Title: Title,
                muscleGroups: muscleGroups},
                {new: true }
            );
            return updatedRoutine;
        },

    }
};

module.exports = resolvers;