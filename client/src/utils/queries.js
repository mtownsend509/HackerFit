import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      routines {
        _id
        routineText
        createdAt
      }
    }
  }
`;

export const QUERY_ROUTINES = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_EXERCISE = gql`
  query getSingleThought($exerciseId: ID!) {
    exercise(exerciseId: $exerciseId) {
      _id
      exerciseText
      exerciseAuthor
      createdAt
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      routines {
        _id
        routineText
        routineAuthor
        createdAt
      }
    }
  }
`;
