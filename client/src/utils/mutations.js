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
  mutation createRoutine($title: String!, $muscleGroups: String!) {
    createRoutine(Title: $title, muscleGroups: $muscleGroups) {
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
    $routineId: ID!
    $name: String!
    $muscle: String!
    $instructions: String!
  ) {
    addExercise(
      routineId: $routineId
      name: $name
      muscle: $muscle
      instructions: $instructions
    ) {
      _id
      exercises {
        _id
        instructions
        muscle
      }
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

export const DELETE_ROUTINE = gql`
  mutation deleteRoutine($routineId: ID!) {
    deleteRoutine(routineId: $routineId) {
      _id
    }
  }
`;

export const DELETE_EXERCISE = gql`
  mutation deleteExercise($exerciseId: ID!, $routineId: ID!) {
    deleteExercise(exerciseId: $exerciseId, routineId: $routineId) {
      _id
    }
  }
`;
