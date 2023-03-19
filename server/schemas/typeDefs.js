const typeDefs = `#graphql
    type User {
        _id: ID!
        username: String
        email: String
        savedRoutines: [Routine]!
    }

    type Routine {
        _id: ID!
        Title: String
        muscleGroups: String
        exercises: [Exercise]!
    }

    type Exercise {
        _id: ID!
        name: String
        muscle: String
        instructions: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
        exercises(muscle: String!): Exercise
        routines(username: String!): [Routine]
        routine(routineId: ID!): Routine
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        createRoutine(Title: String!, muscleGroups: String!): Routine
        addExercise(routineId: ID!, name: String!, muscle: String!, instructions: String!): Routine
        updateExercise(exerciseId: ID!,reps_sets: String!): Exercise
        deleteRoutine(name: String!): Routine
        deleteExercise(exerciseId: ID!, routineId: ID!): Exercise
        
        
    }

`

module.exports = typeDefs




