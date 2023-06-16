const controllers = require("../controllers/message");

const resolvers = {
    Query: {
      messages: controllers.get,
    },
  };

  module.exports = resolvers;