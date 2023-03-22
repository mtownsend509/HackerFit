import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      savedRoutines {
        _id
        Title
      }
    }
  }
`;

export const QUERY_ROUTINES = gql`
  query getRoutines {
    savedRoutines {
      _id
      Title
    }
  }
`;

export const QUERY_SINGLE_ROUTINE = gql`
  query getSingleRountine($routineId: ID!) {
  routine(routineId: $routineId) {
    _id
    Title
    exercises {
      _id
      name
      muscle
      instructions
    }
  }
}
`;


export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    savedRoutines {
      Title
      _id
      muscleGroups
      exercises {
        _id
        name
        muscle
        instructions
        reps
        sets
      }
    }
  }
}
`;
