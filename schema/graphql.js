const { gql } = require('apollo-server');

module.exports = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
  }

  type Query {
    books: [Book]
    users: [User]
    user(id: Int): User
  }
`;