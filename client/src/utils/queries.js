import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      savedRoutines {
        _id
        name
      }
    }
  }
`;

export const QUERY_ROUTINES = gql`
  query getRoutines {
    savedRoutines {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_ROUTINE = gql`
  query getSingleRountine($routineId: ID!) {
  routine(routineId: $routineId) {
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


// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       routines {
//         _id
//         routineText
//         routineAuthor
//         createdAt
//       }
//     }
//   }
// `;
