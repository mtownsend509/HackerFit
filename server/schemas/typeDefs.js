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
        exercises: [Exercise]
    }

    type Exercise {
        _id: ID!
        name: String
        muscle: String
        instructions: String
        reps: Int
        sets: Int
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
        me: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        createRoutine(Title: String!): Routine
        updateRoutine(Title: String!): Routine
        addExercise(title: String!, reps: Int, sets: Int, name: String!, muscle: String!, instructions: String!): Exercise
        updateExercise(routineId: String!, exerciseId: ID!, reps: Int, sets: Int, name: String, muscle: String, instructions: String): Exercise
        deleteRoutine(routineId: ID!): Routine
        deleteExercise(exerciseName: String!, routineName: String!): Exercise
        
        
    }

`

module.exports = typeDefs




