const config = require("./config");
const app = require("./app.js");
const port = config.get("port");
const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(port, () => {
  console.log(`🚀 Server running at port: ${port}`);
});
