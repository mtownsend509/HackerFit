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
        createRoutine(Title: String!, exercises: [String]): Routine
        updateRoutine(routineId: ID!, Title: String!, muscleGroups: String!): Routine
        addExercise(routineId: ID!, reps: Int, sets: Int, name: String!, muscle: String!, instructions: String!): Routine
        updateExercise(routineId: ID!, exerciseId: ID!, reps: Int, sets: Int, name: String, muscle: String, instructions: String): Exercise
        deleteRoutine(routineId: ID!): Routine
        deleteExercise(exerciseId: ID!, routineId: ID!): Exercise
        
        
    }

`

module.exports = typeDefs




