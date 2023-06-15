const { gql } = require("apollo-server");

module.exports = gql`
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
    user(_id: String): User
    users: [User]
    # user(id: Int, name: String): User
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!, dob: String, profile_url: String): SignUpResponse
    login(email: String!, password: String!): SignUpResponse
  }
`;