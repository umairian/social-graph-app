const { gql } = require('apollo-server');

module.exports = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    _id: String
    name: String
    email: String
    password: String
    dob: String
    profile_url: String
    createdAt: String
    updatedAt: String 
  }

  type SignUpResponse {
    user: User
    token: String
  }

  type Query {
    books: [Book]
    user(_id: String): User
    users: [User]
    # user(id: Int, name: String): User
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!, dob: String, profile_url: String): SignUpResponse
  }
`;