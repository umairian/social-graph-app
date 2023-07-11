const { gql } = require("apollo-server");

module.exports = gql`
type Message {
    _id: String 
    sender: String
    recipient: String
    content: String
    createdAt: String
    updatedAt: String 
    
  }

  type Query {
    messages(sender: String!, recipient: String!): [Message]
  }
  type Mutation {
    sendMessage(recipient: String!, sender: String!, content: String!): Message
  }
`;