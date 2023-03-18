import { gql } from '@apollo/client';


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
  mutation createRoutine($routineText: String!) {
    createRoutine(name: $name) {
    _id
    name
    exercises {
      _id
      name
      muscle
      instructions
    }
  }
}
`;

export const ADD_EXERCISE = gql`
  mutation addExercise($routineId: ID!, $name: String!) {
  addExercise(routineId: $routineId, name: $name) {
    _id
    name
    exercises {
      _id
      name
      muscle
      instructions
    }
  }
}
`;

