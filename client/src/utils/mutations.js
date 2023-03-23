import { gql } from "@apollo/client";


export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ROUTINE = gql`
  mutation createRoutine($Title: String!) {
    createRoutine(Title: $Title) {
      Title
      _id
      exercises {
        _id
        instructions
        muscle
        name
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise(
    $title: String!
    $name: String!
    $muscle: String!
    $instructions: String!
  ) {
    addExercise(
      title: $title
      name: $name
      muscle: $muscle
      instructions: $instructions
    ) {
        _id
        name
        instructions
        muscle

    }
  }
`;

export const UPDATE_EXERCISE = gql`
  mutation updateExercise(
    $routineId: ID!
    $exerciseId: ID!
    $reps: Int
    $sets: Int
    $name: String
    $muscle: String
    $instructions: String
  ) {
    updateExercise(
      routineId: $routineId
      exerciseId: $exerciseId
      reps: $reps
      sets: $sets
      name: $name
      muscle: $muscle
      instructions: $instructions
    ) {
      _id
      instructions
      muscle
      name
      reps
      sets
    }
  }
`;

export const UPDATE_ROUTINE = gql`
  mutation updateRoutine($title: String!) {
  updateRoutine(Title: $title) {
    Title
  }
}
`;

export const DELETE_ROUTINE = gql`
  mutation deleteRoutine($routineId: ID!) {
    deleteRoutine(routineId: $routineId) {
      _id
    }
  }
`;

export const DELETE_EXERCISE = gql`
  mutation deleteExercise($exerciseName: String!, $routineName: String!) {
    deleteExercise(exerciseName: $exerciseName, routineName: $routineName) {
      _id
    }
  }
`;

export const SAVE_TEXTAREA = gql`
  mutation SaveTextarea($RPEInput: String!, $HRVInput: String!, $BMIInput: String!) {
    saveTextarea(RPEInput: $RPEInput, HRVInput: $HRVInput, BMIInput: $BMIInput)
  }
`;


