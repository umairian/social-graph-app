const controllers = require("../controllers/message");

const resolvers = {
    Query: {
      messages: controllers.get,
    },
    Mutation: {
      sendMessage: controllers.sendMessage,
    }
  };

  module.exports = resolvers;