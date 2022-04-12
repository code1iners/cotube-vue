import gql from "graphql-tag";

export const JOIN_MUTATION = gql`
  mutation join($email: String!, $username: String!, $password: String!) {
    join(email: $email, username: $username, password: $password) {
      ok
      data {
        id
        email
        username
        password
        createdAt
        updatedAt
      }
      error {
        code
        message
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      error {
        code
        message
      }
    }
  }
`;

export const ME_QUERY = gql`
  query me {
    me {
      id
      email
      username
    }
  }
`;
